import {
  Controller,
  Get,
  Param,
  //ParseIntPipe,
  Post,
  Body,
  Put,
  Delete,
  ParseUUIDPipe,
} from '@nestjs/common';

import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  get() {
    return this.carsService.findAll();
  }

  @Get(':id')
  getCarById(@Param('id', ParseUUIDPipe) id: string) {
    return this.carsService.findOne(id);
  }

  @Post()
  createCar(@Body() createCar: CreateCarDto) {
    return {
      ok: true,
      body: createCar,
    };
  }

  @Put(':id')
  updateCar(@Param('id', ParseUUIDPipe) id: string, @Body() body: any) {
    return {
      ok: true,
      body: body,
    };
  }

  @Delete(':id')
  deleteCar(@Param('id', ParseUUIDPipe) id: string) {
    return {
      ok: true,
      body: 'Carro eliminado',
    };
  }
}
