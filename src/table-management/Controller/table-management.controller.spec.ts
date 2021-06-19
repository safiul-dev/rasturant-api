import { Test, TestingModule } from '@nestjs/testing';
import { TableManagementController } from './table-management.controller';

describe('TableManagementController', () => {
  let controller: TableManagementController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TableManagementController],
    }).compile();

    controller = module.get<TableManagementController>(TableManagementController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
