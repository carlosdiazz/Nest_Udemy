import { v4 as uuid } from 'uuid';
import * as Faker from 'faker';

import { Car } from './../../cars/interfaces/car.interface';

export const CARS_SEED: Car[] = [
  {
    brand: Faker.vehicle.vehicle(),
    model: Faker.vehicle.model(),
    id: uuid(),
  },
  {
    brand: Faker.vehicle.vehicle(),
    model: Faker.vehicle.model(),
    id: uuid(),
  },
  {
    brand: Faker.vehicle.vehicle(),
    model: Faker.vehicle.model(),
    id: uuid(),
  },
  {
    brand: Faker.vehicle.vehicle(),
    model: Faker.vehicle.model(),
    id: uuid(),
  },
  {
    brand: Faker.vehicle.vehicle(),
    model: Faker.vehicle.model(),
    id: uuid(),
  },
  {
    brand: Faker.vehicle.vehicle(),
    model: Faker.vehicle.model(),
    id: uuid(),
  },
];
