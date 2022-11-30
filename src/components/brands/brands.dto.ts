import { IsString, IsNotEmpty, MinLength } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateBrandDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(4)
  name: string;
}

export class UpdateBrandDto extends PartialType(CreateBrandDto) {}
