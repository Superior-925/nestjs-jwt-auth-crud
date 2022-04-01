import { IsNotEmpty} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateSingleUserDto {
  @ApiProperty({ example: "Tony", description: 'The name of user for updating' })
  @IsNotEmpty()
  readonly name: string;
}
