import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PokemonDocument = HydratedDocument<Pokemon>;

@Schema({ timestamps: true })
export class Pokemon {
  @Prop({ required: true, unique: true, index: true })
  name: string;

  @Prop({ required: true, unique: true })
  no: number;

  createdAt?: Date;
}

export const PokemonSchema = SchemaFactory.createForClass(Pokemon);
