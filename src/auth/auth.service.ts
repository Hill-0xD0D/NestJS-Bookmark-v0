import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable({})
export class AuthService {
  constructor(private prismaSrv: PrismaService) {}

  login() {
    return { message: `I'm loggin ...` };
  }
  signup(bodyData) {
    if (bodyData) {
      console.log(`SignUp AuthService: ${JSON.stringify(bodyData)}`);
    }
    return { message: `I'm sign up! ` };
  }

  signin() {
    return { message: `I'm sign in! ` };
  }
}
