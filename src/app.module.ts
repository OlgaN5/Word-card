import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WordCardModule } from './word-card/word-card.module';
import { UserModule } from './user/user.module';
import { SequelizeModule } from '@nestjs/sequelize'
import { User } from './user/entity/user.entity'
import { WordCard } from './word-card/entity/word-card.entity'
import { RegisterModule } from './register/register.module'
import { LoginModule } from './login/login.module'

@Module({
  imports: [
    WordCardModule,
    UserModule,
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '6vremja6',
      database: 'postgres',
      models: [User, WordCard],
      autoLoadModels: true,
      // synchronize: true,
    }),
    RegisterModule,
    LoginModule,

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
