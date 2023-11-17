/**
 * This file contains the AddressesService class, which is responsible for handling CRUD operations for the Address entity.
 * It uses the PrismaService to interact with the database.
 */
/*

*/

import { Injectable } from '@nestjs/common';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AddressesService {
  constructor(private prisma: PrismaService) {}

  create(createAddressDto: CreateAddressDto) {
    return this.prisma.address.create({
      data: {
        zipCode: createAddressDto.zipCode,
        country: createAddressDto.country,
        state: createAddressDto.state,
        city: createAddressDto.city,
        neighborhood: createAddressDto.neighborhood,
        street: createAddressDto.street,
        addressLine: createAddressDto.addressLine,
        userId: createAddressDto.userId,
      },
    });
  }

  findAll() {
    return this.prisma.address.findMany();
  }

  findOne(id: number) {
    return this.prisma.address.findUnique({
      where: {
        id: id,
      },
    });
  }

  update(id: number, updateAddressDto: UpdateAddressDto) {
    return this.prisma.address.update({
      where: {
        id: id,
      },
      data: {
        zipCode: updateAddressDto.zipCode,
        country: updateAddressDto.country,
        state: updateAddressDto.state,
        city: updateAddressDto.city,
        neighborhood: updateAddressDto.neighborhood,
        street: updateAddressDto.street,
        addressLine: updateAddressDto.addressLine,
      },
    });
  }

  remove(id: number) {
    return this.prisma.address.delete({
      where: {
        id: id,
      },
    });
  }
}
