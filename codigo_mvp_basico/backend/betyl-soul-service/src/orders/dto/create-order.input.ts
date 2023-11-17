import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateOrderInput {
  @Field(() => Number, { description: 'The order\'s product\'s id.' })
  productId: number;

  @Field(() => Number, { description: 'The order\'s user\'s id.' })
  userId: number;
}