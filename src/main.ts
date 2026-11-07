import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

// async function bootstrap() {
//   // const app = await NestFactory.create(AppModule, {
//   //   bodyParser: true, // Parser for routes
//   // });
//   const app = await NestFactory.create(AppModule);
//   app.useGlobalPipes(
//     new ValidationPipe({
//       whitelist: true,
//       forbidNonWhitelisted: true,
//       transform: true,
//     }),
//   );

//   const swaggerConfig = new DocumentBuilder()
//     .setTitle('Bookmark API')
//     .setDescription(
//       `The Bookmark API -
//        basic API for testing security, design patterns and clean code`,
//     )
//     .setVersion('0.0')
//     .build();
//   const documentSwagger = SwaggerModule.createDocument(app, swaggerConfig);
//   SwaggerModule.setup('api', app, documentSwagger, {
//     customCss: '.swagger-ui .topbar {display: none;}',
//   });
//   await app.listen(process.env.PORT ?? 4000);
// }
// void bootstrap();

void (async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bodyParser: true, // Parser for routes
  });
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  const swaggerConfig = new DocumentBuilder()
    .setTitle('Bookmark API')
    .setDescription(
      `The Bookmark API -
       basic API for testing security, design patterns and clean code`,
    )
    .setVersion('0.0')
    .build();
  const documentSwagger = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api', app, documentSwagger, {
    customCss: '.swagger-ui .topbar {display: none;}',
  });
  await app.listen(process.env.PORT ?? 4000);
})();
