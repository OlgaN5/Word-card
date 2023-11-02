import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RegisterService } from './register.service';
import { CreateRegisterDto } from './dto/create-register.dto';
import { ApiTags } from '@nestjs/swagger/dist/decorators'
import { ValidationPipe } from '@nestjs/common'
@Controller('register')
export class RegisterController {
  constructor(private readonly registerService: RegisterService) { }

  @Post('/')
  @ApiTags('register')
  create(@Body(new ValidationPipe()) createRegisterDto: CreateRegisterDto) {
    return this.registerService.create(createRegisterDto);
  }
}
