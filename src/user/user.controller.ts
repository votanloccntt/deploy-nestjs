import { Get, HttpStatus, Post } from '@nestjs/common';
import { UserService } from './user.service';
// import { SwaggerMethod } from 'src/common/decorators/swagger-method.decorator';
import { TagController } from 'src/common/decorators/tag-controller.decorator';

@TagController('user')
export class UserController {
  constructor(private userService: UserService) {}

  //   @SwaggerMethod({
  //     summary: 'Xem danh sách tài khoản (ADMIN)',
  //     responses: [
  //       {
  //         status: HttpStatus.OK,
  //         description: 'Xem danh sách tài khoản thành công',
  //       },
  //       {
  //         status: HttpStatus.NOT_FOUND,
  //         description: 'Không tìm thấy users',
  //       },
  //     ],
  //   })
  @Get()
  getUsers() {
    return this.userService.getUsers();
  }

  @Post()
  createUser() {
    return this.userService.createUser();
  }
}
