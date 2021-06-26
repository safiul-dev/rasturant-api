import { Test, TestingModule } from '@nestjs/testing';
import { WorkPeriodsService } from './work-periods.service';

describe('WorkPeriodsService', () => {
  let service: WorkPeriodsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WorkPeriodsService],
    }).compile();

    service = module.get<WorkPeriodsService>(WorkPeriodsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
