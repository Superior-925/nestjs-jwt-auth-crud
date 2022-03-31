import { CanActivate, ExecutionContext, Injectable, ForbiddenException } from '@nestjs/common';
import { Observable } from 'rxjs';
import { UsersService } from '../../modules/users/users.service';

@Injectable()
export class DoesUserExist implements CanActivate {
  constructor(private readonly userService: UsersService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    return this.validateRequest(request);
  }

  async validateRequest(request) {
    const userExistEmail = await this.userService.findOneByEmail(request.body.email);
    const userExistPhone = await this.userService.findOneByPhone(request.body.phone_number);
    if (userExistEmail) {
      throw new ForbiddenException('This email already exist');
    }
    if (userExistPhone) {
      throw new ForbiddenException('This phone number already exist');
    }
    return true;
  }
}
