import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CheckSecurityAnswerInput {
  @Field(() => String)
  email: string;

  @Field(() => String)
  answer: string;
}
