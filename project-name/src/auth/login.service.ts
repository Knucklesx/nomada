import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { WaiterEntity } from 'src/waiters/entities/waiter.entity';

@Injectable()
export class LoginService {
  constructor(private jwtService: JwtService) {}

  // Receives an user and returns an JWT token
  async tokenGenerator(waiter: WaiterEntity): Promise<string> {
    const payload = { username: waiter.name, sub: waiter.id };
    const access_token = this.jwtService.sign(payload);
    return access_token;
  }
}
