import { Module } from '@nestjs/common';
import { SeeedService } from './seeed.service';
import { SeeedController } from './seeed.controller';

import { CarsModule } from '../cars/cars.module';
import { BrandsModule } from '../brands/brands.module';

@Module({
  imports: [CarsModule, BrandsModule],
  controllers: [SeeedController],
  providers: [SeeedService],
})
export class SeeedModule {}
