import { Injectable } from '@nestjs/common';
import { CreateOrderInput } from './dto/create-order.input';
import { UpdateOrderInput } from './dto/update-order.input';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class OrdersService {
  constructor(private prisma: PrismaService) {}

  async create(createOrderInput: CreateOrderInput) {
    return await this.prisma.order.create({ data: createOrderInput });
  }

  findAll() {
    return this.prisma.order.findMany({ include: { product: true } });
  }

  findOne(id: number) {
    return this.prisma.order.findUnique({
      where: {
        id: id,
      },
      include: {
        product: true,
      },
    });
  }

  findOrdersByUser(id: number) {
    return this.prisma.order.findMany({
      where: {
        userId: id,
      },
      include: {
        product: true,
      },
    });
  }

  update(id: number, updateOrderInput: UpdateOrderInput) {
    return this.prisma.order.update({
      where: {
        id: id,
      },
      data: updateOrderInput,
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
