/**
 * This file contains the OrdersService class, which is responsible for handling orders-related operations.
 * It imports CreateOrderDto and UpdateOrderDto from the DTO folder, and PrismaService from the Prisma folder.
 */
/*

*/

import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class OrdersService {
  constructor(private prisma: PrismaService) {}

  create(createOrderDto: CreateOrderDto) {
    return this.prisma.order.create({
      data: {
        userId: createOrderDto.userId,
        productId: createOrderDto.productId,
      },
    });
  }

  findAll() {
    return this.prisma.order.findMany();
  }

  findOne(id: number) {
    return this.prisma.order.findUnique({
      where: {
        id: id,
      },
    });
  }

  remove(id: number) {
    return this.prisma.order.delete({
      where: {
        id: id,
      },
    });
  }
}
