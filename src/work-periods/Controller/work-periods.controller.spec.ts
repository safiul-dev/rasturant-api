import { Test, TestingModule } from '@nestjs/testing';
import { WorkPeriodsController } from './work-periods.controller';

describe('WorkPeriodsController', () => {
  let controller: WorkPeriodsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WorkPeriodsController],
    }).compile();

    controller = module.get<WorkPeriodsController>(WorkPeriodsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
