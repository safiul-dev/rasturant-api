import { Test, TestingModule } from '@nestjs/testing';
import { StoreManagementController } from './store-management.controller';

describe('StoreManagementController', () => {
  let controller: StoreManagementController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StoreManagementController],
    }).compile();

    controller = module.get<StoreManagementController>(StoreManagementController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
