import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/user.dto';

@Controller('user')
export class UserController {
  // constructor(private readonly userService: UserService) { }
  // @Post('add')

  // create(@Body() createUserDto: CreateUserDto) {
  //   this.userService.create(createUserDto)
  // }
}
