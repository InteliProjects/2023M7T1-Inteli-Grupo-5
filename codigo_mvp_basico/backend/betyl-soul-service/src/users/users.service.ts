/**
 * This service is responsible for handling user-related operations, such as creating, updating, and deleting users,
 * as well as retrieving user information and resetting passwords. It uses the PrismaService to interact with the
 * database and perform CRUD operations on the 'user' table. The service also includes methods to retrieve a user's
 * products and orders, and to delete a user and all associated data (addresses, orders, and products).
 */
/*

*/
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  create(createUserInput: CreateUserInput) {
    return this.prisma.user.create({
      data: {
        email: createUserInput.email,
        name: createUserInput.name,
        surname: createUserInput.surname,
        phone: createUserInput.phone,
        pix: createUserInput.pix,
        password: createUserInput.password,
        question: createUserInput.question,
        answer: createUserInput.answer,
        CPF: createUserInput.CPF,
        CNPJ: createUserInput.CNPJ,
        opensAt: createUserInput.opensAt,
        closesAt: createUserInput.closesAt,
      },
    });
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(id: number) {
    return this.prisma.user.findUnique({
      where: {
        id: id,
      },
    });
  }

  async findUserProducts(userId: number) {
    return this.prisma.product.findMany({
      where: {
        userId: userId,
      },
    });
  }

  async findUserOrders(userId: number) {
    return this.prisma.order.findMany({
      where: {
        userId: userId,
      },
      include: {
        product: true,
      },
    });
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return this.prisma.user.update({
      where: {
        id: id,
      },
      data: {
        email: updateUserInput.email,
        name: updateUserInput.name,
        surname: updateUserInput.surname,
        phone: updateUserInput.phone,
        pix: updateUserInput.pix,
        password: updateUserInput.password,
        question: updateUserInput.question,
        answer: updateUserInput.answer,
        CNPJ: updateUserInput.CNPJ,
      },
    });
  }

  async remove(id: number) {
    const deleteAddresses = this.prisma.address.deleteMany({
      where: {
        userId: id,
      },
    });

    const productIds = await this.prisma.product.findMany({
      where: {
        userId: id,
      },
      select: {
        id: true,
      },
    });

    const productIdsArray = productIds.map((product) => product.id);

    const deleteOrders = this.prisma.order.deleteMany({
      where: {
        OR: [
          {
            productId: {
              in: productIdsArray,
            },
          },
          {
            userId: id,
          },
        ],
      },
    });

    const deleteProducts = this.prisma.product.deleteMany({
      where: {
        userId: id,
      },
    });

    const deleteUser = this.prisma.user.delete({
      where: {
        id: id,
      },
    });

    return await this.prisma.$transaction([
      deleteAddresses,
      deleteOrders,
      deleteProducts,
      deleteUser,
    ]);
  }

  async changePasswordByEmail(email: string, password: string) {
    return this.prisma.user.update({
      where: {
        email: email,
      },
      data: {
        password: password,
      },
    });
  }
}
