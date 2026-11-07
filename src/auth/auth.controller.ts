import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDTO } from './dtos';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  signup(@Body() bodyDto: AuthDTO) {
    console.log('SignUp AuthController: ', bodyDto ?? 'No body provided!!');
    return this.authService.signup(bodyDto);
  }

  @Post('signin')
  signin() {
    return this.authService.signin();
  }
}
