import { v4 as uuid } from 'uuid';
import * as Faker from 'faker';

import { Brand } from './../../brands/brand.entity';

export const BRANDS_SEED: Brand[] = [
  {
    name: Faker.vehicle.manufacturer(),
    createdAt: new Date().getTime(),
    id: uuid(),
  },
  {
    name: Faker.vehicle.manufacturer(),
    createdAt: new Date().getTime(),
    id: uuid(),
  },
  {
    name: Faker.vehicle.manufacturer(),
    createdAt: new Date().getTime(),
    id: uuid(),
  },
  {
    name: Faker.vehicle.manufacturer(),
    createdAt: new Date().getTime(),
    id: uuid(),
  },
  {
    name: Faker.vehicle.manufacturer(),
    createdAt: new Date().getTime(),
    id: uuid(),
  },
  {
    name: Faker.vehicle.manufacturer(),
    createdAt: new Date().getTime(),
    id: uuid(),
  },
];
