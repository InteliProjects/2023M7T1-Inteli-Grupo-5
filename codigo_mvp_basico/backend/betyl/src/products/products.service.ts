/**
 * This file contains the ProductsService class, which is responsible for handling CRUD operations for products.
 */
/*

*/

import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  create(createProductDto: CreateProductDto) {
    return this.prisma.product.create({
      data: {
        name: createProductDto.name,
        category: createProductDto.category,
        price: createProductDto.price,
        image: createProductDto.image,
        description: createProductDto.description,
        userId: createProductDto.userId,
      },
    });
  }

  findAll() {
    return this.prisma.product.findMany();
  }

  findOne(id: number) {
    return this.prisma.product.findUnique({
      where: {
        id: id,
      },
    });
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return this.prisma.product.update({
      where: {
        id: id,
      },
      data: {
        name: updateProductDto.name,
        category: updateProductDto.category,
        price: updateProductDto.price,
        image: updateProductDto.image,
        description: updateProductDto.description,
      },
    });
  }

  remove(id: number) {
    return this.prisma.product.delete({
      where: {
        id: id,
      },
    });
  }
}