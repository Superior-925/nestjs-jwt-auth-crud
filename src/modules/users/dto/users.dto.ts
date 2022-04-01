import { UserDto } from '../dto/user.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UsersDto {
  @ApiProperty({ example: "Tony", description: 'The name of user' })
  totalCount: number;
  data: UserDto[]
}
