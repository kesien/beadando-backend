import { Test, TestingModule } from '@nestjs/testing';
import { UgyfelController } from './ugyfel.controller';

describe('UgyfelController', () => {
  let controller: UgyfelController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UgyfelController],
    }).compile();

    controller = module.get<UgyfelController>(UgyfelController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
