/**
 *
 * This file contains the controller for the 'users' endpoint of the API.
 * It defines the routes and handlers for creating, retrieving, updating, and deleting user data,
 * as well as resetting user passwords and creating user addresses.
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
  Request,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UpdateUserAuthDto } from './dto/update-user-auth';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';
import { AddressesService } from 'src/addresses/addresses.service';
import { CreateAddressDto } from 'src/addresses/dto/create-address.dto';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly addressService: AddressesService,
  ) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return { data: await this.usersService.create(createUserDto) };
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  async findAll() {
    return { data: await this.usersService.findAll() };
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  async findOne(@Param('id') id: string, @Request() req: any) {
    return { data: await this.usersService.findOne(req.user.id) };
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':id/products')
  async findUserProducts(@Param('id') id: string, @Request() req: any) {
    return { data: await this.usersService.findUserProducts(req.user.id) };
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':id/orders')
  async findUserOrders(@Param('id') id: string, @Request() req: any) {
    return { data: await this.usersService.findUserOrders(req.user.id) };
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
    @Request() req: any,
  ) {
    return { data: await this.usersService.update(req.user.id, updateUserDto) };
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  async remove(@Param('id') id: string, @Request() req: any) {
    return await this.usersService.remove(req.user.id);
  }

  @Post('reset-password')
  async resetPassword(@Body() updateAuthDto: UpdateUserAuthDto) {
    const resetPassword = await this.usersService.resetPassword(updateAuthDto);
    const response = {
      success: !!resetPassword,
    };

    return response;
  }

  @UseGuards(AuthGuard('jwt'))
  @Post(':id/address')
  async createAddress(
    @Body() createAddressDto: CreateAddressDto,
    @Request() req: any,
  ) {
    createAddressDto.userId = req.user.id;
    return {
      data: await this.addressService.create(createAddressDto),
    };
  }
}
