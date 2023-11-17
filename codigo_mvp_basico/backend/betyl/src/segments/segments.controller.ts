/**
 * This file contains the SegmentsController class which handles HTTP requests related to segments.
 * It defines three endpoints: create, findAll and findOne.
 */
/*


*/


import { Controller, Get, Post, Param } from '@nestjs/common';
import { SegmentsService } from './segments.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Segments')
@Controller('segments')
export class SegmentsController {
  constructor(private readonly segmentsService: SegmentsService) {}

  @Post()
  create() {
    return this.segmentsService.create();
  }

  @Get()
  findAll() {
    return this.segmentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.segmentsService.findOne(+id);
  }
}
