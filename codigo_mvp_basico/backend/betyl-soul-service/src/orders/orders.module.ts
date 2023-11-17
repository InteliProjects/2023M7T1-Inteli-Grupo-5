import {Module} from '@nestjs/common';
import {OrdersService} from './orders.service';
import {OrdersResolver} from './orders.resolver';
import {PrismaModule} from "../prisma/prisma.module";
import {GraphQLModule} from "@nestjs/graphql";
import {ApolloFederationDriver, ApolloFederationDriverConfig} from "@nestjs/apollo";

@Module({
    imports: [
        PrismaModule,
        GraphQLModule.forRoot<ApolloFederationDriverConfig>({
            driver: ApolloFederationDriver,
            autoSchemaFile: {
                federation: 2
            }
        })
    ],
    providers: [OrdersResolver, OrdersService],
})
export class OrdersModule {
}
