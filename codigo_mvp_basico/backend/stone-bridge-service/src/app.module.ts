import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import {
  ApolloGateway,
  IntrospectAndCompose,
  RemoteGraphQLDataSource,
} from '@apollo/gateway';
import { ApolloGatewayDriver, ApolloGatewayDriverConfig } from '@nestjs/apollo';
import { authContext } from './auth.context';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloGatewayDriverConfig>({
      driver: ApolloGatewayDriver,
      server: {
        context: authContext,
      },
      gateway: {
        supergraphSdl: new IntrospectAndCompose({
          subgraphs: [
            {
              name: 'products',
              url: 'http://betyl-product-service:5000/graphql',
            },
            {
              name: 'users',
              url: 'http://betyl-soul-service:5000/graphql',
            },
            {
              name: 'auth',
              url: 'http://stone-wall-service:5000/graphql',
            },
          ],
        }),
        buildService({ url }) {
          return new RemoteGraphQLDataSource({
            url,
            willSendRequest({ request, context }) {
              request.http.headers.set(
                'user',
                context.user ? JSON.stringify(context.user) : null,
              );
            },
          });
        },
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
