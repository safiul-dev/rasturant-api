import { Test, TestingModule } from '@nestjs/testing';
import { WaiterManagementService } from './waiter-management.service';

describe('WaiterManagementService', () => {
  let service: WaiterManagementService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WaiterManagementService],
    }).compile();

    service = module.get<WaiterManagementService>(WaiterManagementService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
