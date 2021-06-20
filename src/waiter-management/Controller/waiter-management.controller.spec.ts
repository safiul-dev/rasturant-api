import { Test, TestingModule } from '@nestjs/testing';
import { WaiterManagementController } from './waiter-management.controller';

describe('WaiterManagementController', () => {
  let controller: WaiterManagementController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WaiterManagementController],
    }).compile();

    controller = module.get<WaiterManagementController>(WaiterManagementController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
