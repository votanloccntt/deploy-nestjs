import { Get, Redirect } from '@nestjs/common';
import { TagController } from './common/decorators/tag-controller.decorator';
import { ApiExcludeEndpoint } from '@nestjs/swagger';

@TagController()
export class AppController {
  @Get()
  @ApiExcludeEndpoint()
  @Redirect('/docs')
  redirectToSwagger() {}
}
