import { Test, TestingModule } from '@nestjs/testing';
import { SubPricingService } from './sub-item.service';

describe('SubPricingService', () => {
  let service: SubPricingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SubPricingService],
    }).compile();

    service = module.get<SubPricingService>(SubPricingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
