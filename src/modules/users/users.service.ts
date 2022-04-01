import { Injectable, Inject } from '@nestjs/common';
const { Op } = require('sequelize');

import { User } from './user.entity';
import { UserDto } from './dto/user.dto';
import { USER_REPOSITORY } from '../../core/constants';
import { GetAllDto } from "./dto/get-all.dto";
import { UsersDto } from "./dto/users.dto";
import { UpdateSingleUserDto } from "./dto/update-single-user.dto";

@Injectable()
export class UsersService {
  constructor(@Inject(USER_REPOSITORY) private readonly userRepository: typeof User) { }

  async create(user: UserDto): Promise<User> {
    return await this.userRepository.create<User>(user);
  }

  async findOneByEmail(email: string): Promise<User> {
    return await this.userRepository.findOne<User>({ where: { email: email } });
  }

  async findOneByPhone(phone: string): Promise<User> {
    return await this.userRepository.findOne<User>({ where: { phone_number: phone } });
  }

  async findOneById(id: number): Promise<User> {
    return await this.userRepository.findOne<User>({ where: { id } });
  }

  async findAll(query: GetAllDto):Promise<UsersDto> {

    const queryOptions = {};
    if(query.name) {
      queryOptions['name'] = query.name;
    }

    const count = await this.userRepository.count();

    const users = await this.userRepository.findAll<User>({ offset: query.offset, limit: query.limit ,
      where: {
        [Op.or]: [
          {
          name: {[Op.like]: `%${query.name}%`},
          },
          {
            email: {
              [Op.like]: `%${query.email}%`
            }
          }
        ]
      }
    });

    return {
       totalCount: count,
       data: users
    };
  }

  async update(id: number, user: UpdateSingleUserDto ) {

    const foundUser = await this.userRepository.findByPk(id);

    foundUser.name = user.name;

    await foundUser.save();

    return foundUser;
  };

  async delete(id: number) {
    return await this.userRepository.destroy({ where: { id: id } });
  }
}
