import { Controller, Body, Post, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { UserDto } from '../users/dto/user.dto';
import { DoesUserExist } from '../../core/guards/doesUserExist.guard';
import { User } from "../users/user.entity";

import {
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';


@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  @ApiOperation({ summary: 'User login' })
  @ApiResponse({
    status: 201,
    description: 'Return user and token',
    type: User
  })
  async login(@Request() req) {
    return await this.authService.login(req.user);
  }

  @UseGuards(DoesUserExist)
  @Post('signup')
  @ApiOperation({ summary: 'User signup' })
  @ApiResponse({
    status: 201,
    description: 'Return user and token',
    type: User
  })
  async signUp(@Body() user: UserDto) {
    return await this.authService.create(user);
  }
}
