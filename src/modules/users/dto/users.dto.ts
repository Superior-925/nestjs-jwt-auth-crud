import { UserDto } from '../dto/user.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UsersDto {
  @ApiProperty({ example: "3", description: 'Count of records in table' })
  totalCount: number;
  @ApiProperty({ example: {
      "data": [
        {
          "id": 1,
          "name": "user",
          "email": "sras@mail.ru",
          "phone_number": "+79185558888",
          "password": "$2b$10$kZJdXhJ7LAlyzJgWo9esP.EUaJFM2KIKXKn1J.07//jXxx1pTcpGW",
          "createdAt": "2022-04-01T22:15:43.006Z",
          "updatedAt": "2022-04-01T22:15:43.006Z"
        },
        {
          "id": 2,
          "name": "user2",
          "email": "as@mail.ru",
          "phone_number": "+79181118888",
          "password": "$2b$10$vLRFlINEU9AqJVFqhRbX0O1ZALObq6x2a5HaynQNHtH6IdEpjv45C",
          "createdAt": "2022-04-01T22:16:07.741Z",
          "updatedAt": "2022-04-01T22:16:07.741Z"
        },
        {
          "id": 3,
          "name": "usersd",
          "email": "asasdd@mail.ru",
          "phone_number": "+79181115588",
          "password": "$2b$10$fIhoXXzA1A3mGCBjsyuMneNAfRnA2/9mu7L919qazdvaln7dNsX5m",
          "createdAt": "2022-04-01T22:16:22.598Z",
          "updatedAt": "2022-04-01T22:16:22.598Z"
        }
      ]
    }, description: 'Count of record in table' })
  data: UserDto[]
}
