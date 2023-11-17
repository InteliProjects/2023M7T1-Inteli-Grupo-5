import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { OrdersService } from './orders.service';
import { Order } from './entities/order.entity';
import { CreateOrderInput } from './dto/create-order.input';
import { UpdateOrderInput } from './dto/update-order.input';

@Resolver(() => Order)
export class OrdersResolver {
  constructor(private readonly ordersService: OrdersService) {}

  @Mutation(() => Boolean)
  async createOrder(
    @Args('createOrderInput') createOrderInput: CreateOrderInput,
  ) {
    await this.ordersService.create(createOrderInput);
    return true;
  }

  @Query(() => [Order], { name: 'orders' })
  findAll() {
    return this.ordersService.findAll();
  }

  @Query(() => Order, { name: 'order' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.ordersService.findOne(id);
  }

  @Query(() => [Order], { name: 'ordersByUser' })
  findAllByUser(@Args('id', { type: () => Int }) userId: number) {
    return this.ordersService.findOrdersByUser(userId);
  }

  @Mutation(() => Order)
  updateOrder(
    @Args('id') id: number,
    @Args('updateOrderInput') updateOrderInput: UpdateOrderInput,
  ) {
    return this.ordersService.update(id, updateOrderInput);
  }

  @Mutation(() => Order)
  removeOrder(@Args('id', { type: () => Int }) id: number) {
    return this.ordersService.remove(id);
  }
}
