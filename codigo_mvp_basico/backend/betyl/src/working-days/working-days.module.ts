import { Module } from '@nestjs/common';
import { WorkingDaysService } from './working-days.service';
import { WorkingDaysController } from './working-days.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [WorkingDaysController],
  providers: [WorkingDaysService],
  imports: [PrismaModule],
})
export class WorkingDaysModule {}
