import { ApiProperty } from '@nestjs/swagger';
import { User } from "../user.entity";

export class UsersDto {
  @ApiProperty({ example: "3", description: 'Count of records in table' })
  totalCount: number;
  @ApiProperty({ example: `[
        {
          "id": 1,
          "name": "user",
          "email": "sras@mail.ru",
          "phone_number": "+79185558888",
          "createdAt": "2022-04-01T22:15:43.006Z",
          "updatedAt": "2022-04-01T22:15:43.006Z"
        },
        {
          "id": 2,
          "name": "user2",
          "email": "as@mail.ru",
          "phone_number": "+79181118888",
          "createdAt": "2022-04-01T22:16:07.741Z",
          "updatedAt": "2022-04-01T22:16:07.741Z"
        },
        {
          "id": 3,
          "name": "usersd",
          "email": "asasdd@mail.ru",
          "phone_number": "+79181115588",
          "createdAt": "2022-04-01T22:16:22.598Z",
          "updatedAt": "2022-04-01T22:16:22.598Z"
        }
      ]`,
    description: 'Count of record in table' })
  data: User[];
}
