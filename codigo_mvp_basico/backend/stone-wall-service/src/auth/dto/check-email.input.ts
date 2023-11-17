import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CheckEmailInput {
  @Field(() => String)
  email: string;
}
