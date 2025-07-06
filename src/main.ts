import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true, // converts the req to the instance of the dto class
    }),
  );

  //configuring swagger
  const config = new DocumentBuilder()
  .setTitle('NestJs MasterClass-Blog app Api')
  .setDescription('Use the base URL as http://localhost:3000')
  .setTermsOfService('URL')
  .setLicense('name of the license','URL')
  .addServer('http://localhost:3000')
  .setVersion('1.0').build();
  //takes two args app itself and config created from the document builder
  const document = SwaggerModule.createDocument(app, config);
  //3-4 args path to swagger, app itself, document
  SwaggerModule.setup('api', app, document);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
