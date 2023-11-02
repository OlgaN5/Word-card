import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api')
  const config = new DocumentBuilder()
    .setTitle('Doc Word-Card')
    .setDescription('description')
    .setVersion('3.0')
    .addBearerAuth()
    .build()
  // const options = new DocumentBuilder().addBearerAuth().build()
  const document = SwaggerModule.createDocument(app, config)

  SwaggerModule.setup('api-docs', app, document)
  await app.listen(3000);
}
bootstrap();
