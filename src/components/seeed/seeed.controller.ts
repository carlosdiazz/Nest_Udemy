import { Controller, Get } from '@nestjs/common';
import { SeeedService } from './seeed.service';

@Controller('seeed')
export class SeeedController {
  constructor(private readonly seeedService: SeeedService) {}

  @Get()
  findAll() {
    return this.seeedService.populateDB();
  }
}
