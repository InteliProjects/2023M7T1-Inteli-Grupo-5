import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CheckLoginInput {
  @Field(() => String)
  emailCpf: string;

  @Field(() => String)
  password: string;
}
