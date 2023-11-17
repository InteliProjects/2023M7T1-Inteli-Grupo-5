import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import {JwtService} from "@nestjs/jwt";

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private jwtService: JwtService) {}

  async findUserByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: {
        email: email,
      },
    });
  }

  async findUserByCpf(cpf: string) {
    return this.prisma.user.findUnique({
      where: {
        CPF: cpf
      }
    });
  }


  async checkSecurityAnswer(email: string, securityAnswer: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    const userSecurityAnswer = user.answer;
    return userSecurityAnswer === securityAnswer;
  }

  async checkPassword(email: string, password: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    const userPassword = user.password;
    return userPassword === password;
  }

  async getSecurityQuestion(email: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    const securityQuestion = user.question;
    return securityQuestion;
  }

  async generate_token(email:string, id:number) {
    const payload = {email, sub:id}
    return this.jwtService.sign(payload)
  }

}
