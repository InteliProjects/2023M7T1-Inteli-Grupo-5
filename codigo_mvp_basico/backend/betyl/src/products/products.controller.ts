/**
 * This file contains the controller for the Products module.
 * It defines the routes for creating, retrieving, updating, and deleting products.
 * It uses the ProductsService to handle the business logic for these routes.
 * It also uses the AuthGuard to protect the routes that require authentication.
 */
/*

*/

import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Request,
  UseGuards,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Products')
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  async create(
    @Body() createProductDto: CreateProductDto,
    @Request() req: any,
  ) {
    createProductDto.userId = req.user.id;
    return { data: await this.productsService.create(createProductDto) };
  }

  @Get()
  async findAll() {
    return { data: await this.productsService.findAll() };
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return { data: await this.productsService.findOne(+id) };
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductDto,
    @Request() req: any,
  ) {
    updateProductDto.userId = req.user.id;
    return { data: await this.productsService.update(+id, updateProductDto) };
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }
}
