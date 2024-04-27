import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/api/v1/users')
  getHello() {
    return this.userService.loadAll();
  }
    
}
