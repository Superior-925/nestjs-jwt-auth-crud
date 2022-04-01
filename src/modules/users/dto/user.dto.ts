import { IsNotEmpty, MinLength, IsEmail, IsPhoneNumber} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UserDto {

  @ApiProperty({ example: "Tony", description: 'The name of user' })
  @IsNotEmpty()
  readonly name: string;

  @ApiProperty({ example: "mymail@mail.ru", description: 'Email of user' })
  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @ApiProperty({ example: "+79181111111", description: 'Phone number of user' })
  @IsNotEmpty()
  @IsPhoneNumber("RU")
  readonly phone_number: string;

  @ApiProperty({ example: "111111", description: 'Password of user' })
  @IsNotEmpty()
  @MinLength(6)
  readonly password: string;
}
