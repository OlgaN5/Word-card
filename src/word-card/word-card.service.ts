import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize'
import { CreateWordCardDto } from './dto/create-word-card.dto';
import { UpdateWordCardDto } from './dto/update-word-card.dto';
import { WordCard } from './entity/word-card.entity';
import { Sequelize } from 'sequelize';

@Injectable()
export class WordCardService {
  constructor(
    @InjectModel(WordCard)
    private wordCardModel: typeof WordCard
  ) { }
  private cards = []
  async create(wordCard: CreateWordCardDto, id: string) {

    return await this.wordCardModel.create({ ...wordCard, userId: id })

  }

  async findAll(userId: string) {
    console.log(this.cards)
    return await this.wordCardModel.findAll({
      where: {
        userId
      }
    })
  }

  async findOneRandom(userId: string) {
    return await this.wordCardModel.findOne({
      where: {
        // id: 1,
        userId: userId
      },
      order: Sequelize.literal('RANDOM()')
    })
  }
  async findOne(id: string, userId: string) {
    return await this.wordCardModel.findOne({
      where: {
        id,
        userId: userId
      }
    })
  }
  async update(id: string, updateWordCardDto: UpdateWordCardDto, userId: string) {
    return await this.wordCardModel.update(updateWordCardDto, {
      where: {
        id,
        userId: userId
      }
    })
  }

  async remove(id: string, userId: string) {
    return await this.wordCardModel.destroy({
      where: {
        id,
        userId: userId
      }
    })
  }
}
