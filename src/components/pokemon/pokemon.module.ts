import { Module } from '@nestjs/common';
import { MongooseModule, Schema } from '@nestjs/mongoose';

import { PokemonService } from './pokemon.service';
import { PokemonController } from './pokemon.controller';
import { Pokemon, PokemonSchema } from './pokemon.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Pokemon.name,
        schema: PokemonSchema,
      },
    ]),
  ],
  controllers: [PokemonController],
  providers: [PokemonService],
})
export class PokemonModule {}