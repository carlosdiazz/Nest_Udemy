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
      transform: true, //Aqui transformos los query para que me lleguen en su formato
      transformOptions: {
        enableImplicitConversion: true, //Aqui transformo para que los query me lleguen en su formato
      },
    }),
  );

  app.setGlobalPrefix('api'); //Aqui expecifico que todas mis rutas comenzaran con API

  await app.listen(process.env.PORT || 3000, () => {
    console.log(
      `👍El server esta arriba en el puerto: ${process.env.PORT || 3000} 👍💪`,
    );
  });
}
main();
