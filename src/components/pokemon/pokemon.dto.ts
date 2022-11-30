import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  MinLength,
  Min,
} from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreatePokemonDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(4)
  name: string;

  @IsNumber()
  @IsPositive()
  @Min(1)
  no: number;
}

export class UpdatePokemonDto extends PartialType(CreatePokemonDto) {}
