import { Test, TestingModule } from '@nestjs/testing';
import { CategoryManagementController } from './category-management.controller';

describe('CategoryManagementController', () => {
  let controller: CategoryManagementController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategoryManagementController],
    }).compile();

    controller = module.get<CategoryManagementController>(CategoryManagementController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
