import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CheckPasswordInput {
  @Field(() => String)
  email: string;

  @Field(() => String)
  password: string;
}
