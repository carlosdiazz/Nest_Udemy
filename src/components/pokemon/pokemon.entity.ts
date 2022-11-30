import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PokemonDocument = HydratedDocument<Pokemon>;

@Schema()
export class Pokemon {
  @Prop({ required: true, unique: true, index: true })
  name: string;

  @Prop({ required: true, unique: true })
  no: number;
}

export const PokemonSchema = SchemaFactory.createForClass(Pokemon);
