import { join } from 'path';
import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
//import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

import { CarsModule } from './components/cars/cars.module';
import { BrandsModule } from './components/brands/brands.module';
import { SeeedModule } from './components/seeed/seeed.module';
import { PokemonModule } from './components/pokemon/pokemon.module';

import {
  EnvConfiguration,
  enviroments,
  JoiValidationENV,
} from './config/app.config';
import { MongoModule } from './database/mongo.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: enviroments[process.env.NODE_ENV] || '.env',
      load: [EnvConfiguration],
      validationSchema: JoiValidationENV,
      isGlobal: true,
    }),
    MongoModule,
    CarsModule,
    BrandsModule,
    SeeedModule,
    PokemonModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    //MongooseModule.forRoot('mongodb://admin:admin@localhost:27017/'),
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
