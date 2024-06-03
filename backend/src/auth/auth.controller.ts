import { Controller, Post, Body, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthEntity } from './auth.entity';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() AuthEntity): Promise<boolean> {
    // console.log(AuthEntity)

    try {
      await this.authService.authentication(AuthEntity);
      return true;
    } catch (error) {
      return false;
    }
    
  }

    @Get('check')
    GetInfoParameter(){
        return "Hola mundo";
    }

}
