import { IsString } from 'class-validator';

export class CreateCarDto {
  @IsString({ message: 'El brand debe ser String' })
  readonly brand: string;

  @IsString({ message: 'El model debe ser String' })
  readonly model: string;
}
