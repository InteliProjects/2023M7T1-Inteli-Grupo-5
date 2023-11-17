import {Module} from '@nestjs/common';
import {ProductsService} from './products.service';
import {ProductsResolver} from './products.resolver';
import {PrismaModule} from "../prisma/prisma.module";
import {GraphQLModule} from "@nestjs/graphql";
import {ApolloFederationDriver, ApolloFederationDriverConfig} from "@nestjs/apollo";

@Module({
    imports: [PrismaModule,
        GraphQLModule.forRoot<ApolloFederationDriverConfig>({
            driver: ApolloFederationDriver,
            autoSchemaFile: {
                federation: 2
            }
        })],
    providers: [ProductsResolver, ProductsService],
})
export class ProductsModule {
}
