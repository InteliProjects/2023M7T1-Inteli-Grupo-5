import {Module} from '@nestjs/common';
import {UsersService} from './users.service';
import {UsersResolver} from './users.resolver';
import {GraphQLModule} from "@nestjs/graphql";
import {ApolloFederationDriver, ApolloFederationDriverConfig} from "@nestjs/apollo";
import {PrismaModule} from "../prisma/prisma.module";

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
    providers: [UsersResolver, UsersService],
})
export class UsersModule {
}
