import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from '../user/entity/user.entity'
import { CreateRegisterDto } from './dto/create-register.dto';
import * as bcrypt from 'bcrypt'

@Injectable()
export class RegisterService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User
  ) { }
  async create(data: CreateRegisterDto) {

    const isEmail = await this.userModel.findOne({
      where: { email: data.email }
    })
    const isLogin = await this.userModel.findOne({
      where: { email: data.login }
    })
    if (isEmail) return { message: 'email is exist' }
    if (isLogin) return { message: 'login is exist' }

    const saldRound = 10
    const hashedPassword = await bcrypt.hash(data.password, saldRound)
    data.password = hashedPassword
    return await this.userModel.create({ ...data })
  }

}
