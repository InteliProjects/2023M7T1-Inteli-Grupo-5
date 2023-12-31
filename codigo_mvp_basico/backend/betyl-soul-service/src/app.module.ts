import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {UsersModule} from './users/users.module';
import {PrismaModule} from "./prisma/prisma.module";
import { OrdersModule } from './orders/orders.module';

@Module({
    imports: [PrismaModule, UsersModule, OrdersModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
