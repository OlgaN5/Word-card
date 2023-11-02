import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateLoginDto } from './dto/create-login.dto';
import { User } from '../user/entity/user.entity';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt'
import * as bcryt from 'bcrypt'
@Injectable()
export class LoginService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
    private jwtService: JwtService,
    private userService: UserService
  ) { }
  async login(createLoginDto: CreateLoginDto) {
    // this.userModel.
    const { login, password } = createLoginDto
    const user = await this.userService.findOneLogin(login)
    const compare = await bcryt.compare(password, user.password)
    if (!compare) return null
    const payload = { sub: user.id }
    return {
      acces_token: await this.jwtService.signAsync(payload)
    }

  }


}
