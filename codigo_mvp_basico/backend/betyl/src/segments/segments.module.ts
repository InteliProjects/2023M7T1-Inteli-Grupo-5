import { Module } from '@nestjs/common';
import { SegmentsService } from './segments.service';
import { SegmentsController } from './segments.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [SegmentsController],
  providers: [SegmentsService],
  imports: [PrismaModule],
})
export class SegmentsModule {}
