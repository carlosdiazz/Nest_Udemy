import { IsString, IsOptional } from 'class-validator';
//import { Pa } from 'class-transformer';

export class CreateCarDto {
  @IsString({ message: 'El brand debe ser String' })
  readonly brand: string;

  @IsString({ message: 'El model debe ser String' })
  readonly model: string;
}

export class UpdateCarDto {
  //@IsString({ message: 'El brand debe ser String' })
  //@IsOptional()
  //@IsUUID()
  //readonly id?: string;

  @IsString({ message: 'El brand debe ser String' })
  @IsOptional()
  readonly brand?: string;

  @IsString({ message: 'El model debe ser String' })
  @IsOptional()
  readonly model?: string;
}
