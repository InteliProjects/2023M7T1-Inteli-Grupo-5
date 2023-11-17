import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { CurrentUser } from './current-user.decorator';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => User)
  createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.usersService.create(createUserInput);
  }

  @Query(() => [User], { name: 'users' })
  findAll() {
    return this.usersService.findAll();
  }

  @Query(() => User, { name: 'user' })
  findOne(
    @Args('id', { type: () => Int }) id: number,
    @CurrentUser() user: User,
  ) {
    return this.usersService.findOne(Number(user?.id));
  }

  @Mutation(() => User)
  updateUser(
    @Args('updateUserInput') updateUserInput: UpdateUserInput,
    @CurrentUser() user: User,
  ) {
    return this.usersService.update(Number(user?.id), updateUserInput);
  }

  @Mutation(() => User)
  removeUser(
    @Args('id', { type: () => Int }) id: number,
    @CurrentUser() user: User,
  ) {
    return this.usersService.remove(Number(user?.id));
  }

  // change password mutation by email
  @Mutation(() => User)
  async changePasswordByEmail(
    @Args('email') email: string,
    @Args('password') password: string,
  ) {
    return this.usersService.changePasswordByEmail(email, password);
  }
}
