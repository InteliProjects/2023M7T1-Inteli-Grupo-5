import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ProductsService } from './products.service';
import { Product } from './entities/product.entity';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';
import { CurrentUser, User } from 'src/current-user.decorator';

@Resolver(() => Product)
export class ProductsResolver {
  constructor(private readonly productsService: ProductsService) {}

  @Mutation(() => Product)
  createProduct(
    @Args('createProductInput') createProductInput: CreateProductInput,
    @CurrentUser() user: User,
  ) {
    createProductInput.userId = Number(user?.id);
    return this.productsService.create(createProductInput);
  }

  @Query(() => [Product], { name: 'products' })
  findAll() {
    return this.productsService.findAll();
  }

  @Query(() => Product, { name: 'product' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.productsService.findOne(id);
  }

  @Query(() => [Product], { name: 'productsByUser' })
  findByUser(
    @Args('userId', { type: () => Int }) userId: number,
    @CurrentUser() user: User,
  ) {
    return this.productsService.findByUser(user?.id);
  }

  @Mutation(() => Product)
  updateProduct(
    @Args('updateProductInput') updateProductInput: UpdateProductInput,
    @CurrentUser() user: User,
  ) {
    updateProductInput.userId = Number(user?.id);
    return this.productsService.update(
      updateProductInput.id,
      updateProductInput,
    );
  }

  @Mutation(() => Product)
  removeProduct(
    @Args('id', { type: () => Int }) id: number,
    @CurrentUser() user: User,
  ) {
    return this.productsService.remove(id);
  }
}
