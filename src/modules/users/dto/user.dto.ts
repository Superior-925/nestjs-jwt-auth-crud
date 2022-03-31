import { IsNotEmpty, MinLength, IsEmail, IsPhoneNumber} from 'class-validator';

export class UserDto {
  @IsNotEmpty()
  readonly name: string;

  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  @IsPhoneNumber("RU")
  readonly phone_number: string;

  @IsNotEmpty()
  @MinLength(6)
  readonly password: string;
}
