import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class WorkingDaysService {
  constructor(private prisma: PrismaService) {}

  create() {
    return this.prisma.workingDay.createMany({
      data: [
        { day: 'SUNDAY' },
        { day: 'MONDAY' },
        { day: 'TUESDAY' },
        { day: 'WEDNESDAY' },
        { day: 'THURSDAY' },
        { day: 'FRIDAY' },
        { day: 'SATURDAY' },
      ],
      skipDuplicates: true,
    });
  }

  findAll() {
    return this.prisma.workingDay.findMany();
  }

  findOne(id: number) {
    return this.prisma.workingDay.findUnique({
      where: {
        id: id,
      },
    });
  }
}
