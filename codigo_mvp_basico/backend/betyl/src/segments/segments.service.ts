/*
Handles segments database operations
*/

import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { segmentsList } from './dto/segments-list';

@Injectable()
export class SegmentsService {
  constructor(private prisma: PrismaService) {}

  create() {
    return this.prisma.segment.createMany({
      data: segmentsList,
    });
  }

  findAll() {
    return this.prisma.segment.findMany();
  }

  findOne(id: number) {
    return this.prisma.segment.findUnique({ where: {
      id: id
    }});
  }
}
