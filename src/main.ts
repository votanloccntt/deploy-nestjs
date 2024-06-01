import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Swagger } from './common/configs/swagger.config';
import { HttpExceptionFilter } from './common/exception-filters/http.exception-filter';
import { resolve } from 'path';
import { writeFileSync } from 'fs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  Swagger.build(app);
  app.useGlobalFilters(new HttpExceptionFilter());
  app.enableCors();
  await app.listen(3000);
  // get the swagger json file (if app is running in development mode)
  if (process.env.NODE_ENV === 'development') {
    const pathToSwaggerStaticFolder = resolve(process.cwd(), 'swagger-static');

    // write swagger json file
    const pathToSwaggerJson = resolve(
      pathToSwaggerStaticFolder,
      'swagger.json',
    );
    const swaggerJson = JSON.stringify(document, null, 2);
    writeFileSync(pathToSwaggerJson, swaggerJson);
    console.log(`Swagger JSON file written to: '/swagger-static/swagger.json'`);
  }
}
bootstrap();
