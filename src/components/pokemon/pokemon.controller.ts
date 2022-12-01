import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  Query,
} from '@nestjs/common';

import { PokemonService } from './pokemon.service';
import { CreatePokemonDto, UpdatePokemonDto } from './pokemon.dto';

import { PaginationDto } from './../../common/dto/pagination.dto';
import { ObjectIdMongoPipe } from './../../common/pipes/object_id_mongo.pipe';

@Controller('pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Post()
  create(@Body() createPokemonDto: CreatePokemonDto) {
    return this.pokemonService.create(createPokemonDto);
  }

  @Get()
  findAll(@Query() paginationDto: PaginationDto) {
    return this.pokemonService.findAll(paginationDto);
  }
  @Get('seed')
  seed() {
    return this.pokemonService.seed();
  }
  @Get('seed2')
  seed2() {
    return this.pokemonService.seed2();
  }
  @Get('delete')
  deleteAll() {
    return this.pokemonService.deleteAll();
  }
  @Get(':id')
  findOne(@Param('id', ObjectIdMongoPipe) id: string) {
    return this.pokemonService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id', ObjectIdMongoPipe) id: string,
    @Body() updatePokemonDto: UpdatePokemonDto,
  ) {
    return this.pokemonService.update(id, updatePokemonDto);
  }

  @Delete(':id')
  remove(@Param('id', ObjectIdMongoPipe) id: string) {
    return this.pokemonService.remove(id);
  }
}
