import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(()=> String, { description: 'The user\'s id.' })
    id: string;

  @Field(() => String, { description: 'The user\'s email address.' })
  email: string;

  @Field(() => String, { description: 'The user\'s name.' })
  name: string;

  @Field(() => String, { description: 'The user\'s surname.' })
  surname: string;

  @Field(() => String, { description: 'The user\'s phone number.' })
  phone: string;

  @Field(() => String, { description: 'The user\'s password.' })
  password: string;

  @Field(() => String, { description: 'The user\'s Pix key.' })
  pix: string;

  @Field(() => String, { description: 'The user\'s security question.' })
  question: string;

  @Field(() => String, { description: 'The user\'s security answer.' })
  answer: string;

  @Field(() => String, { description: 'The user\'s CPF number.' })
  CPF: string;

  @Field(() => String, { description: 'The user\'s CNPJ number.' })
  CNPJ: string;

  @Field(() => String, { description: 'The user\'s opening time.' })
  opensAt: string;

  @Field(() => String, { description: 'The user\'s closing time.' })
  closesAt: string;
}
