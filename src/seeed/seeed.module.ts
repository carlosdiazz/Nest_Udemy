import { Module } from '@nestjs/common';
import { SeeedService } from './seeed.service';
import { SeeedController } from './seeed.controller';

import { CarsModule } from '../components/cars/cars.module';
import { BrandsModule } from '../components/brands/brands.module';

@Module({
  imports: [CarsModule, BrandsModule],
  controllers: [SeeedController],
  providers: [SeeedService],
})
export class SeeedModule {}
