/*
Not implemented
*/

import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { WorkingDaysService } from './working-days.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Working days')
@Controller('working-days')
export class WorkingDaysController {
  constructor(private readonly workingDaysService: WorkingDaysService) {}

  @Post()
  create() {
    return this.workingDaysService.create();
  }

  @Get()
  findAll() {
    return this.workingDaysService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.workingDaysService.findOne(+id);
  }
}
