import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { ValidationPipe } from '@nestjs/common';

void (async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bodyParser: true, // Parser for routes
  });
  await app.listen(process.env.PORT ?? 4000);
})();
