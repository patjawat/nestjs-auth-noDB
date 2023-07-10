import { Injectable } from '@nestjs/common';
import { User } from '../model/user.entity';
import { Role } from '../model/role.enum';

@Injectable()

@Injectable()
export class UsersService {
    private readonly users = [
        {
            userId: 1,
            username: 'anna',
            password: '12345',
            roles: [Role.User],
        },
        {
            userId: 2,
            username: 'admin',
            password: '112233',
            roles: [Role.Admin],
        },
    ];

    async findOne(username: string): Promise<User | undefined> {
        return this.users.find((user) => user.username === username);
    }
}
