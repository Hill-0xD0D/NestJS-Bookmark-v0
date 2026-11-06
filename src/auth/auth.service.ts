import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable({})
export class AuthService {
  constructor(private prismaSrv: PrismaService) {}

  login() {
    return { message: `I'm loggin ...` };
  }
  signup() {
    const userData = {
      email: String,
      password: String,
      firstName: String,
      lastName: String,
    };

    console.log(userData);
    return { message: `I'm sign up! ` };
  }

  signin() {
    return { message: `I'm sign in! ` };
  }
}
