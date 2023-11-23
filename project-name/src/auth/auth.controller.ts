import { Controller, Logger, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { WaiterEntity } from 'src/waiters/entities/waiter.entity';
import { Resource } from './help/login.dto';
import { LoginService } from './login.service';

@Controller('auth')
export class AuthController {
  private readonly logger = new Logger(AuthController.name);
  constructor(private loginService: LoginService) {}

  @Post('token')
  @UseGuards(AuthGuard('local'))
  async getToken(@Request() req): Promise<Resource> {
    const user = req.user as WaiterEntity;
    const access_token = await this.loginService.tokenGenerator(user);

    const res = new Resource({
      access_token: access_token,
      token_type: 'bearer',
      username: user.name,
    });

    return res;
  }
}
