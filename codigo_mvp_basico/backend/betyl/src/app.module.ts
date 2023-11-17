import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { HealthModule } from './health/health.module';
import { ProductsModule } from './products/products.module';
import { FileModule } from './file/file.module';
import { AddressesModule } from './addresses/addresses.module';
import { OrdersModule } from './orders/orders.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { WorkingDaysModule } from './working-days/working-days.module';
import { SegmentsModule } from './segments/segments.module';


@Module({
  imports: [
    PrismaModule,
    ProductsModule,
    OrdersModule,
    UsersModule,
    AddressesModule,
    HealthModule,
    AuthModule,
    FileModule,
    WorkingDaysModule,
    SegmentsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
