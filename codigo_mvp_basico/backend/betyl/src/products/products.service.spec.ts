import { Test, TestingModule } from '@nestjs/testing';
import { ProductsService } from './products.service';
import { PrismaService } from 'src/prisma/prisma.service';

describe('ProductsService', () => {
  let service: ProductsService;
  let prisma: PrismaService;

  const fakeProduct = {
    id: 2,
    name: 'T1 chip promo',
    category: 'Maquininhas',
    price: 106.8,
    image:
      'https://res.cloudinary.com/dunz5zfpt/fl_progressive/f_auto,c_limit,w_128,q_100/site-ton/maquininhas/machine-t1-2',
    description:
      'Receba por aproximação (NFC); Comprovante por SMS; Receba suas vendas em 1 dia útil',
    userId: 0,
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductsService, PrismaService],
    }).compile();

    service = module.get<ProductsService>(ProductsService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  describe('create', () => {
    it('should create a product', async () => {
      prisma.product.create = jest.fn().mockReturnValueOnce(fakeProduct);
      const productDto = {
        name: 'T1 chip promo',
        category: 'Maquininhas',
        price: 106.8,
        image:
          'https://res.cloudinary.com/dunz5zfpt/fl_progressive/f_auto,c_limit,w_128,q_100/site-ton/maquininhas/machine-t1-2',
        description:
          'Receba por aproximação (NFC); Comprovante por SMS; Receba suas vendas em 1 dia útil',
        userId: 0,
      };
      const product = await service.create(productDto);
      expect(product).toMatchObject({
        id: expect.any(Number),
        name: productDto.name,
        category: productDto.category,
        price: productDto.price,
        image: productDto.image,
        description: productDto.description,
        userId: expect.any(Number),
      });
    });
  });

  describe('findMany', () => {
    it('should find all products', async () => {
      prisma.product.findMany = jest.fn().mockResolvedValueOnce([fakeProduct]);
      const products = await service.findAll();
      expect(products).toEqual([
        {
          id: fakeProduct.id,
          name: fakeProduct.name,
          category: fakeProduct.category,
          price: fakeProduct.price,
          image: fakeProduct.image,
          description: fakeProduct.description,
          userId: fakeProduct.userId,
        },
      ]);
    });
  });
});
