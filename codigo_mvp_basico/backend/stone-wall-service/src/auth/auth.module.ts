import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { ApolloFederationDriver, ApolloFederationDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { PrismaModule } from 'src/prisma/prisma.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [PrismaModule, GraphQLModule.forRoot<ApolloFederationDriverConfig>({
    driver: ApolloFederationDriver,
    autoSchemaFile: {
        federation: 2
    }
}), JwtModule.register({
  secret: 'dev',
  signOptions: { expiresIn: '600s' },
})],
  providers: [AuthResolver, AuthService],
})
export class AuthModule {}
