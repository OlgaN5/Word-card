import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { WordCardService } from './word-card.service';
import { CreateWordCardDto } from './dto/create-word-card.dto';
import { UpdateWordCardDto } from './dto/update-word-card.dto';
import { AuthGuard } from 'src/login/auth.guard'
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger/dist/decorators'
import { User } from '../user.decorator'
import { ValidationPipe } from '@nestjs/common';
@Controller('wordCard')
export class WordCardController {
  constructor(private readonly wordCardService: WordCardService) { }

  @Post('add')
  @ApiTags('word')
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  create(@Body(new ValidationPipe()) createWordCardDto: CreateWordCardDto, @User() id: string) {
    console.log(id)
    return this.wordCardService.create(createWordCardDto, id);
  }

  @Get('get-wordCards')
  @ApiTags('word')
  @ApiBearerAuth()
  @UseGuards(AuthGuard)

  findAll(@User() userId: string) {
    return this.wordCardService.findAll(userId);
  }

  @Get('get-wordCard')
  @ApiTags('word')
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  findOneRandom(@User() userId: string) {
    return this.wordCardService.findOneRandom(userId);
  }
  @Get('get-wordCard/:id')
  @ApiTags('word')
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  findOne(@Param('id') id: string, @User() userId: string) {
    return this.wordCardService.findOne(id, userId);
  }
  @Patch('edit:id')
  @ApiTags('word')
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  update(@Param('id') id: string, @Body() updateWordCardDto: UpdateWordCardDto,@User() userId: string) {
    return this.wordCardService.update(id, updateWordCardDto,userId);
  } 

  @Delete(':id')
  @ApiTags('word')
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  remove(@Param('id') id: string, @User() userId: string) {
    return this.wordCardService.remove(id, userId);
  }
}
