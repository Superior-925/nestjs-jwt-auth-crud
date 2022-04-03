import { ApiProperty } from '@nestjs/swagger';
import { User } from "../user.entity";

export class ResponseUserDto {
  @ApiProperty({ example: `{
  "id": 5,
  "name": "Tony",
  "email": "mymail@mail.ru",
  "phone_number": "+79181111111",
  "createdAt": "2022-04-02T22:11:11.399Z",
  "updatedAt": "2022-04-02T22:12:26.222Z"
}`, description: 'User data' })
  user: User;
  @ApiProperty({ example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OSwibmFtZSI6InRvbnl1dW9wcCIsImVtYWlsIjoic2FkZGRAbWFpbC5ydSIsInBob25lX251bWJlciI6Iis3OTU1MjIxNTU1NSIsInVwZGF0ZWRBdCI6IjIwMjItMDQtMDNUMTk6MDM6MzYuNjk1WiIsImNyZWF0ZWRBdCI6IjIwMjItMDQtMDNUMTk6MDM6MzYuNjk1WiIsImlhdCI6MTY0OTAxMjYxNiwiZXhwIjoxNjQ5MTg1NDE2fQ.Iui1EHegmXHZ5ZwSo59bZym3_H2bw-e9NQrP2r8RGoI",
    description: 'User token' })
  token: string;
}
