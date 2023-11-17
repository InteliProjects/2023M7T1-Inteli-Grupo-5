import {ObjectType, Field, Int, Float} from '@nestjs/graphql';

@ObjectType()
export class Product {
  @Field(()=> Number, { description: 'The product\'s id.' })
    id: number;

  @Field( ()=> String, { description: 'The product\'s owner'})
    name: string;

  @Field( ()=> String, { description: 'The product\'s category'})
    category: string;

  @Field( ()=> Number, {description: 'The product\'s price'})
    price: number;

  @Field( ()=> String, {description: 'The product\'s image link.'})
    image: string;

  @Field( ()=> String, {description: 'The product\'s description.'})
    description: string;

  @Field( ()=> Number, {description: 'The product\'s owner id.'})
    userId: number;
}
