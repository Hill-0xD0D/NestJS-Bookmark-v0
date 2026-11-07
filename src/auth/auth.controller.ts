import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDTO } from './dtos';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  signup(@Body() bodyDto: AuthDTO) {
    return this.authService.signup(bodyDto);
  }

  @Post('signin')
  signin() {
    return this.authService.signin();
  }
}
