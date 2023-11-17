import {ObjectType, Field, Int} from '@nestjs/graphql';
import {ProductOrder} from "./product_order.entity";


@ObjectType()
export class Order {
    @Field(() => Number, {description: 'The order\'s id.'})
    id: number;

    @Field(() => Number, {description: 'The order\'s product\'s id.'})
    productId: number;

    @Field(() => Number, {description: 'The order\'s user\'s id.'})
    userId: number;

    @Field(() => String, {description: 'The order\'s deliveryDate.'})
    deliveryDate: string;

    @Field(() => String, {description: 'The order\'s status.'})
    status: string;

    @Field(() => ProductOrder, {description: 'The order\'s product.'})
    product: ProductOrder;

}
