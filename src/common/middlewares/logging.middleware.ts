import { HttpStatus, Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { NextFunction, Response, Request } from 'express';

@Injectable()
export class LoggingMiddleware implements NestMiddleware {
  logger = new Logger('Response');
  use(req: Request, res: Response, next: NextFunction) {
    const { method, originalUrl: url } = req;
    const reqTime = new Date().getTime();
    res.on('finish', () => {
      const { statusCode } = res;
      const resTime = new Date().getTime();
      if (statusCode === HttpStatus.CREATED || statusCode === HttpStatus.OK) {
        this.logger.log(
          `${method} ${url} ${statusCode} - ${resTime - reqTime} ms`,
        );
      }
    });
    next();
  }
}
