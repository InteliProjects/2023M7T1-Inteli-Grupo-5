/**
 * This file contains the ProductsService class, which is responsible for handling CRUD operations for products.
 */
/*

*/

import {Injectable} from '@nestjs/common';
import {PrismaService} from 'src/prisma/prisma.service';
import {CreateProductInput} from "./dto/create-product.input";
import {UpdateProductInput} from "./dto/update-product.input";

@Injectable()
export class ProductsService {
    constructor(private prisma: PrismaService) {
    }

    create(createProductInput: CreateProductInput) {
        return this.prisma.product.create({
            data: {
                name: createProductInput.name,
                category: createProductInput.category,
                price: createProductInput.price,
                image: createProductInput.image,
                description: createProductInput.description,
                userId: createProductInput.userId,
            },
        });
    }

    findAll() {
        return this.prisma.product.findMany();
    }

    findByUser(userId: number) {
        return this.prisma.product.findMany({
            where: {
                userId: userId,
            },
        });
    }

    findOne(id: number) {
        return this.prisma.product.findUnique({
            where: {
                id: id,
            },
        });
    }

    update(id: number, updateProductInput: UpdateProductInput) {
        return this.prisma.product.update({
            where: {
                id: id,
            },
            data: {
                name: updateProductInput.name,
                category: updateProductInput.category,
                price: updateProductInput.price,
                image: updateProductInput.image,
                description: updateProductInput.description,
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