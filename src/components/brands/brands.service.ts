import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';

import { CreateBrandDto, UpdateBrandDto } from './brands.dto';
import { Brand } from './brand.entity';

@Injectable()
export class BrandsService {
  private brands: Brand[] = [
    {
      id: uuid(),
      name: 'Prueba',
      createdAt: new Date().getTime(),
      //updatedAt: 34,
    },
  ];

  create(createBrandDto: CreateBrandDto) {
    const newBrand: Brand = {
      createdAt: new Date().getTime(),
      name: createBrandDto.name,
      id: uuid(),
    };
    this.brands.push(newBrand);
    return newBrand;
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string) {
    const brand = this.brands.find((brand) => brand.id === id);
    if (!brand) {
      throw new NotFoundException('No se ecnontro este Brand');
    }
    return brand;
  }

  update(id: string, data: UpdateBrandDto) {
    let brandDb = this.findOne(id);
    this.brands = this.brands.map((brand) => {
      if (brand.id === id) {
        brandDb.updatedAt = new Date().getTime();
        brandDb = { ...brandDb, ...data };
        return brandDb;
      }
      return brand;
    });
    return brandDb;
  }

  remove(id: string) {
    this.brands = this.brands.filter((brand) => brand.id !== id);
    return { message: 'Brand Eliminado' };
  }

  fillBrandsWithSeedData(brand: Brand[]) {
    this.brands = brand;
  }
}
