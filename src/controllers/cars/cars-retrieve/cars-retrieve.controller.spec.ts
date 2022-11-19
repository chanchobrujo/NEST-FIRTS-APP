import { Test, TestingModule } from '@nestjs/testing';
import { CarsRetrieveController } from './cars-retrieve.controller';

describe('CarsRetrieveController', () => {
  let controller: CarsRetrieveController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CarsRetrieveController],
    }).compile();

    controller = module.get<CarsRetrieveController>(CarsRetrieveController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
