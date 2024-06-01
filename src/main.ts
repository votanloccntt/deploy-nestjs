import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Swagger } from './common/configs/swagger.config';
import { HttpExceptionFilter } from './common/exception-filters/http.exception-filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  Swagger.build(app);
  app.useGlobalFilters(new HttpExceptionFilter());
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
