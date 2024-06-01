import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}
  getUsers() {
    const users = [
      {
        name: 'loc',
        age: 18,
      },
      {
        name: 'Trieu',
        age: 19,
      },
    ];
    return users;
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
