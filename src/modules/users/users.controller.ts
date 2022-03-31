import { Controller, Param, Body, Get, Post, Put, Delete, UseGuards, NotFoundException, Query, Request } from "@nestjs/common";
import { AuthGuard } from '@nestjs/passport';
import {UsersService} from "./users.service";
import  { GetAllDto } from "./dto/get-all.dto";
import { SingleUserDto } from "../users/dto/single-user.dto";
import { UserDto } from "./dto/user.dto";

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get()
  async findAll(
    @Query() query: GetAllDto
  ) {
    return await this.userService.findAll(query);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('single')
  async findOne(@Query() query: SingleUserDto) {
    // find the user with this query
    const user = await this.userService.findOne(query);

    // if the user doesn't exit in the db, throw a 404 error
    if (user === null) {
      throw new NotFoundException(`This user doesn't exist`);
    }

    return user;
  }

  @UseGuards(AuthGuard('jwt'))
  @Put(':id')
  async update(@Param('id') id: number, @Body() user: UserDto, @Request() req) {
    // get the number of row affected and the updated post
    const updatedUser = await this.userService.update(req.user.id, user);

    // if the number of row affected is zero,
    // it means the post doesn't exist in our db
    if (updatedUser === null) {
      throw new NotFoundException(`This user doesn't exist`);
    }

    // return the updated post
    return updatedUser;
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  async remove(@Param('id') id: number, @Request() req) {
    const deleted = await this.userService.delete(id);

    if (deleted === 0) {
      throw new NotFoundException(`This user doesn't exist`);
    }

    // return success message
    return 'Successfully deleted';
  }
}
