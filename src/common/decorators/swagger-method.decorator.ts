import { applyDecorators } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { SwaggerMethodInfo } from '../interfaces/swagger.interface';

export function SwaggerMethod(info: SwaggerMethodInfo) {
  const { summary, responses } = info;
  const decorators = [
    ApiOperation({ summary }),
    ...responses.map((response) => ApiResponse(response)),
  ];
  return applyDecorators(...decorators);
}
