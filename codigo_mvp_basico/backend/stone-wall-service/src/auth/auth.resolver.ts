import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { Auth } from './entities/auth.entity';
import { CheckUserInput } from './dto/check-user.input';
import { CheckSecurityAnswerInput } from './dto/check-security-answer.input';
import { CheckPasswordInput } from './dto/check-password.input';
import { CheckEmailInput } from './dto/check-email.input';
import { CheckLoginInput } from './dto/check-login.input';

@Resolver(() => Auth)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => Auth)
  async authenticate(@Args('data') data: CheckLoginInput) {
    let user = await this.authService.findUserByEmail(data.emailCpf);

    if (!user) {
      user = await this.authService.findUserByCpf(data.emailCpf);
    }

    if (user) {
      if (user.password === data.password) {
        const { password, ...filteredUser } = user;
        const auth_token = await this.authService.generate_token(
          user.email,
          user.name,
          user.id,
        );
        return { auth_token, user: filteredUser };
      } else {
        throw new Error('Invalid Password');
      }
    }
    throw new Error('Invalid User or Password');
  }

  @Mutation(() => Boolean)
  async checkUser(@Args('data') data: CheckUserInput) {
    const user = await this.authService.findUserByEmail(data.email);
    return !!user;
  }

  @Mutation(() => Boolean)
  async checkSecurityAnswer(@Args('data') data: CheckSecurityAnswerInput) {
    const isCorrect = await this.authService.checkSecurityAnswer(
      data.email,
      data.answer,
    );
    return isCorrect;
  }

  @Mutation(() => Boolean)
  async checkPassword(@Args('data') data: CheckPasswordInput) {
    const alreadySet = await this.authService.checkPassword(
      data.email,
      data.password,
    );
    return alreadySet;
  }

  @Mutation(() => Boolean)
  async checkEmail(@Args('data') data: CheckEmailInput) {
    const user = await this.authService.findUserByEmail(data.email);
    return !!user;
  }

  @Query(() => String)
  async securityQuestion(@Args('email') email: string) {
    return this.authService.getSecurityQuestion(email);
  }
}
