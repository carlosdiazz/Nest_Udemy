import { Test, TestingModule } from '@nestjs/testing';
import { SeeedService } from './seeed.service';

describe('SeeedService', () => {
  let service: SeeedService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SeeedService],
    }).compile();

    service = module.get<SeeedService>(SeeedService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
