/**
 * This file contains the AddressesController class which handles HTTP requests related to addresses.
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
} from '@nestjs/common';
import { AddressesService } from './addresses.service';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Adresses')
@Controller('addresses')
export class AddressesController {
  constructor(private readonly addressesService: AddressesService) {}

  @Post()
  async create(@Body() createAddresDto: CreateAddressDto) {
    return { data: await this.addressesService.create(createAddresDto) };
  }

  @Get()
  async findAll() {
    return { data: await this.addressesService.findAll() };
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return { data: await this.addressesService.findOne(+id) };
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateAddressDto: UpdateAddressDto,
  ) {
    return { data: await this.addressesService.update(+id, updateAddressDto) };
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.addressesService.remove(+id);
  }
}
