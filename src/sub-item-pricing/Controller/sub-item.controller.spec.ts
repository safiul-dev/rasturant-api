import { Test, TestingModule } from '@nestjs/testing';
import { SubPricingController } from './sub-item.controller';

describe('SubPricingController', () => {
  let controller: SubPricingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SubPricingController],
    }).compile();

    controller = module.get<SubPricingController>(SubPricingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
