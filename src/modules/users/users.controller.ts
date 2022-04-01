import { Controller, Param, Body, Get, Post, Put, Delete, UseGuards, NotFoundException, Query, Request } from "@nestjs/common";
import { AuthGuard } from '@nestjs/passport';
import {UsersService} from "./users.service";
import  { GetAllDto } from "./dto/get-all.dto";
import { UpdateSingleUserDto } from "./dto/update-single-user.dto";

import {
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get()
  @ApiOperation({ summary: 'Find users with params' })
  @ApiResponse({
    status: 200,
    description: 'Return found users'
  })
  async findAll(
    @Query() query: GetAllDto
  ) {
    const users = await this.userService.findAll(query);

    // if nothing found in the db, throw a 404 error
    if (!users.data.length) {
      throw new NotFoundException(`Nothing found`);
    }

    // found users
    return users;
  }

  @UseGuards(AuthGuard('jwt'))
  @Put(':id')
  @ApiOperation({ summary: 'Update one of users' })
  @ApiResponse({
    status: 200,
    description: 'Return updated user'
  })
  async update(@Param('id') id: number, @Body() user: UpdateSingleUserDto) {
    // get the number of row affected and the updated post
    const updatedUser = await this.userService.update(id, user);

    // if the user doesn't exist in the db, throw a 404 error
    if (updatedUser === null) {
      throw new NotFoundException(`This user doesn't exist`);
    }

    // return the updated post
    return updatedUser;
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  @ApiOperation({ summary: 'Delete one of users' })
  @ApiResponse({
    status: 200,
    description: 'Return success message'
  })
  async delete(@Param('id') id: number, @Request() req) {
    const deleted = await this.userService.delete(id);

    // if the user doesn't exist in the db, throw a 404 error
    if (deleted === null) {
      throw new NotFoundException(`This user doesn't exist`);
    }

    // return success message
    return 'Successfully deleted';
  }
}
