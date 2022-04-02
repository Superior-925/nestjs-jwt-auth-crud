import { Table, Column, Model, DataType } from 'sequelize-typescript';
import { ApiProperty } from "@nestjs/swagger";

@Table
export class User extends Model<User> {

  @ApiProperty({ example: "5", description: 'Id of record' })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    autoIncrement: true,
    unique: true,
    primaryKey: true,
  })
  id: number;

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

  @ApiProperty({ example: "2022-04-02T22:11:11.399Z", description: 'Date of creation' })
  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  createdAt: string;

  @ApiProperty({ example: "2022-04-02T22:12:26.222Z", description: 'Update date' })
  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  updatedAt: string;
}
