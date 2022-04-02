import { Table, Column, Model, DataType } from 'sequelize-typescript';
import { ApiProperty } from "@nestjs/swagger";

@Table
export class User extends Model<User> {

  @ApiProperty({ example: "Tony", description: 'The name of user' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @ApiProperty({ example: "mymail@mail.ru", description: 'Email of user' })
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  email: string;

  @ApiProperty({ example: "+79181111111", description: 'Phone number of user' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  phone_number: string;

  @ApiProperty({ example: "111111", description: 'Password of user, min length 6 symbols' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;
}
