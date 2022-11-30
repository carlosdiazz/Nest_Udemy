import { Injectable } from '@nestjs/common';

import { BRANDS_SEED } from './data/brands.seed';
import { CARS_SEED } from './data/cars.seed';

import { CarsService } from '../components/cars/cars.service';
import { BrandsService } from '../components/brands/brands.service';

@Injectable()
export class SeeedService {
  constructor(
    private readonly carsService: CarsService,
    private readonly brandsService: BrandsService,
  ) {}

  populateDB() {
    this.carsService.fillCarsWithSeedData(CARS_SEED);
    this.brandsService.fillBrandsWithSeedData(BRANDS_SEED);
    return { message: 'Seed agregado' };
  }
}
