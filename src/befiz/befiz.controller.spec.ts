import { Test, TestingModule } from '@nestjs/testing';
import { BefizController } from './befiz.controller';

describe('BefizController', () => {
  let controller: BefizController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BefizController],
    }).compile();

    controller = module.get<BefizController>(BefizController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
