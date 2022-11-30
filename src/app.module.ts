import { Module } from '@nestjs/common';
import { CarsModule } from './cars/cars.module';
import { BrandsModule } from './brands/brands.module';
import { SeeedModule } from './seeed/seeed.module';

@Module({
  imports: [CarsModule, BrandsModule, SeeedModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
