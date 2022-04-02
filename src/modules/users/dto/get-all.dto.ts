import { IsNotEmpty} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class GetAllDto {
  @ApiProperty({ example: "user", description: 'The name of user for searching' })
  readonly name?: string;

  @ApiProperty({ example: "asd@mail.ru", description: 'The email of user for searching' })
  readonly email?: string;

  @ApiProperty({ example: "25", description: 'Records limit for pagination' })
  @IsNotEmpty()
  limit: number

  @ApiProperty({ example: "10", description: 'Offset for pagination' })
  @IsNotEmpty()
  offset: number
}
