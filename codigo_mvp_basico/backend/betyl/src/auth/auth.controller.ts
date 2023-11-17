/**
 * Controller for handling authentication related requests.
 */
/*

*/

import {
  Controller,
  Post,
  Body,
  Param,
  Get,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('authenticate')
  async login(@Body() data: { emailCpf: string; password: string }) {
    const emailCpf = data.emailCpf;

    let user = await this.authService.findUserByEmail(data.emailCpf);

    if (!user) {
      user = await this.authService.findUserByCpf(data.emailCpf);
    }

    if (user) {
      if (user.password === data.password) {
        const { password, ...filteredUser } = user;
        const response = {
          auth_token: await this.authService.generate_token(
            user.email,
            user.id,
          ),
          user: filteredUser,
        };
        return response;
      } else {
        throw new HttpException('Invalid Password', HttpStatus.FORBIDDEN);
      }
    }
    throw new HttpException('Invalid User or Password', HttpStatus.FORBIDDEN);
  }

  @Post('check-user')
  async checkUser(@Body() data: { email: string }) {
    const user = await this.authService.findUserByEmail(data.email);
    const response = { userExists: !!user };
    return response;
  }

  @Post('check-security-answer')
  async checkSecurityAnswer(@Body() data: { email: string; answer: string }) {
    const response = {
      isCorrect: false,
    };
    const isCorrect = await this.authService.checkSecurityAnswer(
      data.email,
      data.answer,
    );
    response.isCorrect = isCorrect;
    return response;
  }

  @Post('check-password')
  async checkPassword(@Body() data: { email: string; password: string }) {
    const response = {
      alreadySet: false,
    };

    const alreadySet = await this.authService.checkPassword(
      data.email,
      data.password,
    );
    response.alreadySet = alreadySet;
    return response;
  }

  @Post('check-email')
  async checkEmail(@Body() data: { email: string }) {
    const user = await this.authService.findUserByEmail(data.email);
    const response = {
      emailExists: !!user,
    };
    return response;
  }

  @Get('security-question/:email')
  async getSecurityQuestion(@Param('email') email: string) {
    const question = await this.authService.getSecurityQuestion(email);
    const response = {
      question: question,
    };
    return response;
  }
}
