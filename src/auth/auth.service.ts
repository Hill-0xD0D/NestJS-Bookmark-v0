import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as argon2 from 'argon2';
import { AuthDTO } from './dtos';

@Injectable({})
export class AuthService {
  constructor(private prismaSrv: PrismaService) {}

  async signup(bodyData: AuthDTO) {
    if (!bodyData) {
      return;
    }
    const { password, email } = bodyData;
    // generate hash
    const hash = await argon2.hash(password, {
      type: argon2.argon2id,
      memoryCost: 19456, // 19MiB (OWASP minimum recommendation)
      timeCost: 2,
      parallelism: 1,
    });

    // save it in the db
    // const user = { email, hash };
    const user = await this.prismaSrv.user.create({
      data: { email, password: hash },
    });

    // return saved user
    return user;
  }

  signin() {
    return { message: `I'm sign in! ` };
  }

  login() {
    return { message: `I'm loggin ...` };
  }
}
