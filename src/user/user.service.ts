import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize'
import { User } from './entity/user.entity'
import { CreateUserDto } from './dto/user.dto';
@Injectable()
export class UserService {
    constructor(
        @InjectModel(User)
        private userModel: typeof User
    ) { }

    create(data: CreateUserDto) {
        return this.userModel.create({ ...data })
    }
    findOne(id: string) {
        return this.userModel.findOne({
            where: {
                id: id
            }
        })
    }
    findOneLogin(login: string) {
        return this.userModel.findOne({
            where: {
                login: login
            }
        })
    }
}
