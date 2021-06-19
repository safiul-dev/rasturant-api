import { Test, TestingModule } from '@nestjs/testing';
import { StoreManagementService } from './store-management.service';

describe('StoreManagementService', () => {
  let service: StoreManagementService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StoreManagementService],
    }).compile();

    service = module.get<StoreManagementService>(StoreManagementService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
