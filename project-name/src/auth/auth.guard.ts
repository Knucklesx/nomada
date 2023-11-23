import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);
    if (!token) {
      throw new HttpException('Token not found', HttpStatus.UNAUTHORIZED);
    }
    try {
      const payload = this.jwtService.verify(token, {
        secret: process.env.JWT_SECRET,
      });
      // 💡 We're assigning the payload to the request object here
      // so that we can access it in our route handlers
      if ('username' in payload) {
        request['username'] = payload['username'];
        request.user = payload;
        return true;
      } else {
        throw new HttpException(
          'Badly formatted token',
          HttpStatus.UNAUTHORIZED,
        );
      }
    } catch (e) {
      throw new HttpException(
        'Login not authorized: ' + e,
        HttpStatus.UNAUTHORIZED,
      );
    }

    // Returns a generic 403 FORBIDDEN
    return false;
  }

  private extractTokenFromHeader(request: Request): string | null {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : null;
  }
}
