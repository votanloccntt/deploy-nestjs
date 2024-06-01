import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export class Swagger {
  static build(app: INestApplication): void {
    const config = new DocumentBuilder()
      .setTitle('PAYMENT APIS')
      .setDescription('Tất cả các API của thanh toán')
      .addBearerAuth()
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('docs', app, document);
  }
}
