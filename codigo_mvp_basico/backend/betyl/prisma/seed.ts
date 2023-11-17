import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
      email: 'user@example.com',
      name: 'John',
      surname: 'Doe',
      phone: "1234567890",
      password: 'password',
      pix: 'pix',
      question: 'question',
      answer: 'answer',
      CPF: '000.000.000-00',
      CNPJ: '000',
      opensAt: '6h',
      closesAt: '18h',
    },
  });

  const product = await prisma.product.create({
    data: {
      name: 'Product Name',
      category: 'Product Category',
      price: 100.0,
      image: 'Product Image URL',
      description: 'Product Description',
      userId: user.id,
    },
  });

  const order = await prisma.order.create({
    data: {
      productId: product.id,
      userId: user.id,
    },
  });

  const address = await prisma.address.create({
    data: {
      zipCode: "12345678",
      country: 'Country Name',
      state: 'State Name',
      city: 'City Name',
      neighborhood: 'Neighborhood Name',
      street: 'Street Name',
      addressLine: 'Address Line',
      userId: user.id,
    },
  });
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
