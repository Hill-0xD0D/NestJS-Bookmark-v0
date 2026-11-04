import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  constructor() {}

  login() {
    return { message: `I'm loggin ...` };
  }
  signup() {
    return { message: `I'm sign up! ` };
  }

  signin() {
    return { message: `I'm sign in! ` };
  }
}
