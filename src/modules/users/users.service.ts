import { Injectable, Inject } from '@nestjs/common';
const { Op } = require('sequelize');

import { User } from './user.entity';
import { UserDto } from './dto/user.dto';
import { USER_REPOSITORY } from '../../core/constants';
import { GetAllDto } from "./dto/get-all.dto";
import { UsersDto } from "./dto/users.dto";
import { SingleUserDto } from "./dto/single-user.dto";

@Injectable()
export class UsersService {
  constructor(@Inject(USER_REPOSITORY) private readonly userRepository: typeof User) { }

  async create(user: UserDto): Promise<User> {
    return await this.userRepository.create<User>(user);
  }

  // async update(user: UserDto): Promise<[affectedCount: number, affectedRows: User[]]> {
  //   return await this.userRepository.update<User>(
  //     { name: user.name },
  //     { where: { id: user.id } }
  //   )
  // }

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

  async findOne(query: SingleUserDto) {
    return await this.userRepository.findOne<User>({ where: {
        [Op.or]: [
          {
            email: {[Op.like]: `%${query.email}%`},
          },
          {
            phone_number: {
              [Op.like]: `%${query.phone_number}%`
            }
          }
        ]
      } });
  }

  async update(id: number, user: UserDto ) {
    return await this.userRepository.update({ name: user.name }, {
      where: {
        id: id
      }
  })
  };

  async delete(id: number) {
    return await this.userRepository.destroy({ where: { id: id } });
  }
}
