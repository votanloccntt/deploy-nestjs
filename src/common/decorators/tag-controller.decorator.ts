import { applyDecorators, Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

export function TagController(str?: string) {
  return applyDecorators(Controller(str), ApiTags(str?.toUpperCase()));
}
