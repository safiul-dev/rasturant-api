import { Test, TestingModule } from '@nestjs/testing';
import { TableManagementService } from './table-management.service';

describe('TableManagementService', () => {
  let service: TableManagementService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TableManagementService],
    }).compile();

    service = module.get<TableManagementService>(TableManagementService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
