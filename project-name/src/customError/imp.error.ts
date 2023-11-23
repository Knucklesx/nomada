import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpStatus,
} from '@nestjs/common';
import { BussinessExceptions } from './custom.error';

@Catch(BussinessExceptions)
export class CustomErrorFilter implements ExceptionFilter {
  catch(exception: BussinessExceptions, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    const status = exception.getStatus();

    response.status(HttpStatus.BAD_REQUEST);

    response.status(status).json({
      errors: {
        statusCode: status,
        timestamp: new Date().toISOString(),
        path: request.url,
        details: exception.message,
      },
    });
  }

  getStatus() {
    throw new BussinessExceptions(
      'Method not implemented',
      HttpStatus.NOT_IMPLEMENTED,
    );
  }
}
