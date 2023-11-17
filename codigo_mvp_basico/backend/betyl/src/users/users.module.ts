import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { AddressesModule } from 'src/addresses/addresses.module';
import { AddressesService } from 'src/addresses/addresses.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, AddressesService],
  imports: [PrismaModule, AddressesModule],
})
export class UsersModule {}
