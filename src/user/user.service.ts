import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async getUsers() {
    const users = await this.usersRepository.find();
    if (users.length < 1) throw new NotFoundException('Không tìm thấy users');
    return new HttpException(users, HttpStatus.OK);
  }

  async createUser() {
    const user = {
      firstName: 'Loc',
      lastName: 'Vo',
      isActive: true,
    };
    const result = this.usersRepository.save(user);
    if (!result) throw new BadRequestException('Không thể tạo user');
    return result;
  }
}
