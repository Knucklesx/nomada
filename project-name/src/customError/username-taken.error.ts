import { HttpException, HttpStatus } from '@nestjs/common';

export class UsernameTakenException extends HttpException {
  constructor(message: string) {
    super(message, HttpStatus.CONFLICT);
  }
}
