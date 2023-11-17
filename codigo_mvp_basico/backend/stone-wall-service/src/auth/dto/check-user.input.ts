import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CheckUserInput {
  @Field(() => String)
  email: string;
}
