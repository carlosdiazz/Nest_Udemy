import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

import { AppModule } from './app.module';

async function main() {
  const app = await NestFactory.create(AppModule);

  //Aqui validos mis Dtos a nivel global
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //Si envio parametros que esten demas, el backend no lo va a recibir
      forbidNonWhitelisted: process.env.NODE_ENV === 'PROD' ? false : true, //Aqui si me llegan paramtros demas aviso el error
    }),
  );

  await app.listen(3000);
}
main();
