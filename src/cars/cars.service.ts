import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';

import { Car } from './interfaces/car.interface';
import { CreateCarDto, UpdateCarDto } from './dto/car.dto';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    {
      id: uuid(),
      brand: 'Toyota',
      model: 'Corolla',
    },
    {
      id: uuid(),
      brand: 'Toyota',
      model: 'Camry',
    },
    {
      id: uuid(),
      brand: 'Honda',
      model: 'Civic',
    },
  ];

  findAll() {
    return this.cars;
  }

  findOne(id: string) {
    const car = this.cars.find((car) => car.id === id);
    if (!car) {
      throw new NotFoundException(`No se encontro el carro con este id: ${id}`);
    }
    return car;
  }

  create(createCar: CreateCarDto) {
    const newCar: Car = {
      brand: createCar.brand,
      model: createCar.model,
      id: uuid(),
    };
    this.cars.push(newCar);
    return newCar;
  }

  update(id: string, data: UpdateCarDto) {
    let carDb = this.findOne(id);
    this.cars = this.cars.map((car) => {
      if (car.id === id) {
        carDb = { ...carDb, ...data };
        return carDb;
      }
      return car;
    });
    return carDb;
  }

  delete(id: string) {
    this.findOne(id);
    this.cars = this.cars.filter((car) => car.id !== id);
    return { message: 'Car eliminado' };
  }
}
