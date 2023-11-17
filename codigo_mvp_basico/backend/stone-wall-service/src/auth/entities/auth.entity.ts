import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Auth {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  email: string;

  @Field(() => String, { nullable: true })
  auth_token?: string;
}
