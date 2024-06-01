import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
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
}
