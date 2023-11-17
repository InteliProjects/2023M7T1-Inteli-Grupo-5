/**
 * This service is responsible for handling user-related operations, such as creating, updating, and deleting users,
 * as well as retrieving user information and resetting passwords. It uses the PrismaService to interact with the
 * database and perform CRUD operations on the 'user' table. The service also includes methods to retrieve a user's
 * products and orders, and to delete a user and all associated data (addresses, orders, and products).
 */
/*

*/
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateUserAuthDto } from './dto/update-user-auth';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  create(createUserDto: CreateUserDto) {
    return this.prisma.user.create({
      data: {
        email: createUserDto.email,
        name: createUserDto.name,
        surname: createUserDto.surname,
        phone: createUserDto.phone,
        pix: createUserDto.pix,
        password: createUserDto.password,
        question: createUserDto.question,
        answer: createUserDto.answer,
        CPF: createUserDto.CPF,
        CNPJ: createUserDto.CNPJ,
        opensAt: createUserDto.opensAt,
        closesAt: createUserDto.closesAt,
        addresses: {
          create: {
            street: createUserDto.address.street,
            addressLine: createUserDto.address.addressLine,
            neighborhood: createUserDto.address.neighborhood,
            city: createUserDto.address.city,
            state: createUserDto.address.state,
            country: createUserDto.address.country,
            zipCode: createUserDto.address.zipCode,
          },
        },
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

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.prisma.user.update({
      where: {
        id: id,
      },
      data: {
        email: updateUserDto.email,
        name: updateUserDto.name,
        surname: updateUserDto.surname,
        phone: updateUserDto.phone,
        pix: updateUserDto.pix,
        password: updateUserDto.password,
        question: updateUserDto.question,
        answer: updateUserDto.answer,
        CNPJ: updateUserDto.CNPJ,
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

  resetPassword(updateUserAuthDto: UpdateUserAuthDto) {
    return this.prisma.user.update({
      where: {
        email: updateUserAuthDto.email,
      },
      data: {
        password: updateUserAuthDto.password,
      },
    });
  }
}
