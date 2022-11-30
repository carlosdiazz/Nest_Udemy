import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreatePokemonDto, UpdatePokemonDto } from './pokemon.dto';
import { Pokemon, PokemonDocument } from './pokemon.entity';

@Injectable()
export class PokemonService {
  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<PokemonDocument>,
  ) {}

  async create(data: CreatePokemonDto): Promise<Pokemon> {
    try {
      const newPokemon = new this.pokemonModel(data);
      return await newPokemon.save();
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findAll(): Promise<Pokemon[]> {
    return this.pokemonModel.find();
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
}
