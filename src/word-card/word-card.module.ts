import { Module } from '@nestjs/common';
import { WordCardService } from './word-card.service';
import { WordCardController } from './word-card.controller';
import {SequelizeModule} from '@nestjs/sequelize'
import { WordCard } from './entity/word-card.entity';
@Module({
  imports: [SequelizeModule.forFeature([WordCard])],
  controllers: [WordCardController],
  providers: [WordCardService],
})
export class WordCardModule {}
