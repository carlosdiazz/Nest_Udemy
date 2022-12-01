import { Test, TestingModule } from '@nestjs/testing';
import { SeeedController } from './seeed.controller';
import { SeeedService } from './seeed.service';

describe('SeeedController', () => {
  let controller: SeeedController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SeeedController],
      providers: [SeeedService],
    }).compile();

    controller = module.get<SeeedController>(SeeedController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
