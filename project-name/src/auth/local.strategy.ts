import { HttpStatus, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { BussinessExceptions } from 'src/customError/custom.error';
import { WaiterEntity } from 'src/waiters/entities/waiter.entity';
import { WaitersService } from './../waiters/waiters.service';
import { EncrypterService } from './help/encrypter.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private waiterService: WaitersService) {
    super();
  }

  async validate(name: string, password: string): Promise<WaiterEntity> {
    await EncrypterService.encryptPassword(password);
    const credential = await this.waiterService.findCredentialByUsername(
      name,
    );
    if (!credential) {
      throw new BussinessExceptions(
        'Username or password does not match',
        HttpStatus.UNAUTHORIZED,
      );
    }
    const matchedPassword = await EncrypterService.comparePassword(
      password,
      credential.pass,
    );
    if (!matchedPassword) {
      throw new BussinessExceptions(
        'Username or password does not match',
        HttpStatus.UNAUTHORIZED,
      );
    }
    return credential;
  }
}
