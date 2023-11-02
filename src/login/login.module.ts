import { Module } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginController } from './login.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from '../user/entity/user.entity'
import { JwtModule } from '@nestjs/jwt'
import { jwtContains } from './login.contains';
import { UserModule } from 'src/user/user.module';
import { UserService } from 'src/user/user.service';
@Module({
  imports: [
    SequelizeModule.forFeature([User]),
    JwtModule.register({
      global: true,
      secret: jwtContains.secret,
    })],
  controllers: [LoginController],
  providers: [LoginService, UserService],

})
export class LoginModule {}
