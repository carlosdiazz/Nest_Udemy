import { join } from 'path';
import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { MongooseModule } from '@nestjs/mongoose';

import { CarsModule } from './components/cars/cars.module';
import { BrandsModule } from './components/brands/brands.module';
import { SeeedModule } from './seeed/seeed.module';
import { PokemonModule } from './components/pokemon/pokemon.module';

@Module({
  imports: [
    CarsModule,
    BrandsModule,
    SeeedModule,
    PokemonModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    MongooseModule.forRoot('mongodb://admin:admin@localhost:27017/'),
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
