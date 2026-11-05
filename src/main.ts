import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

void (async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bodyParser: true, // Parser for routes
  });

  const swaggerConfig = new DocumentBuilder()
    .setTitle('Bookmark API')
    .setDescription(
      `The Bookmark API -
       basic API for testing security, design patterns and clean code`,
    )
    .setVersion('0.0')
    .build();
  const documentSwagger = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api', app, documentSwagger);
  await app.listen(process.env.PORT ?? 4000);
})();
