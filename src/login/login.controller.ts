import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus } from '@nestjs/common'
import { LoginService } from './login.service'
import { CreateLoginDto } from './dto/create-login.dto'
import { ApiTags } from '@nestjs/swagger/dist/decorators'
import { ValidationPipe } from '@nestjs/common'
@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) { }

  @ApiTags('login')
  @Post('/')
  @HttpCode(HttpStatus.OK)
  login(@Body(new ValidationPipe()) createLoginDto: CreateLoginDto) {
    return this.loginService.login(createLoginDto);
  }

}
