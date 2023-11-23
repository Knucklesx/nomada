import { HttpException, HttpStatus } from '@nestjs/common';

export class BussinessExceptions extends HttpException {
  constructor(message: string, status: HttpStatus) {
    super({ message, status }, status);
  }
}
