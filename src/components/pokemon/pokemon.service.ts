import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

import { CreatePokemonDto, UpdatePokemonDto } from './pokemon.dto';
import { Pokemon, PokemonDocument } from './pokemon.entity';
import { Poke } from './interface/poke_response.interface';
import { PaginationDto } from './../../common/dto/pagination.dto';
@Injectable()
export class PokemonService {
  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<PokemonDocument>,
    private readonly httpService: HttpService,
  ) {}

  async create(data: CreatePokemonDto): Promise<Pokemon> {
    try {
      const newPokemon = new this.pokemonModel(data);
      return await newPokemon.save();
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findAll(PaginationDto?: PaginationDto) {
    const { limit = 10, skip = 0 } = PaginationDto;
    if (limit >= 500) {
      throw new BadRequestException('Esta pidiendo un limite muy grande');
    }
    const result = await this.pokemonModel
      .find()
      .limit(limit)
      .skip(skip)
      .sort({ no: 1 })
      .exec();
    const count = await this.pokemonModel.count();
    return { result, count };
  }

  async findOne(id: string): Promise<Pokemon> {
    const pokemon = await this.pokemonModel.findById(id);
    if (!pokemon) {
      throw new NotFoundException('Este pokemon no se encontro');
    }
    return pokemon;
  }

  async update(id: string, data: UpdatePokemonDto): Promise<Pokemon> {
    await this.findOne(id);
    try {
      return await this.pokemonModel
        .findByIdAndUpdate(id, { $set: data }, { new: true })
        .exec();
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async remove(id: string) {
    const pokemon = await this.pokemonModel.findByIdAndDelete(id);
    if (!pokemon) {
      throw new NotFoundException('Este pokemon no se encontro');
    }
    return { message: 'Pokemon Eliminado' };
  }

  async seed() {
    const { data } = await firstValueFrom(
      this.httpService
        .get<Poke>('https://pokeapi.co/api/v2/pokemon?limit=1000')
        .pipe(),
    );
    let id = 0;
    data.results.forEach(async ({ name }) => {
      id++;
      const newPokemon = new this.pokemonModel({ name: name, no: id });
      try {
        await newPokemon.save();
      } catch (error) {
        console.log(error);
      }
    });
    return { message: 'Seed agregado' };
  }

  async seed2() {
    const { data } = await firstValueFrom(
      this.httpService
        .get<Poke>('https://pokeapi.co/api/v2/pokemon?limit=1000')
        .pipe(),
    );
    let id = 0;
    const pokemonToInsert: Pokemon[] = [];
    data.results.forEach(async ({ name }) => {
      id++;
      pokemonToInsert.push({ name, no: id });
    });
    await this.pokemonModel.insertMany(pokemonToInsert);
    return { message: 'Seed agregado' };
  }

  async deleteAll() {
    await this.pokemonModel.deleteMany({});
    return { message: 'Todos los pokemomn borrados' };
  }
}
