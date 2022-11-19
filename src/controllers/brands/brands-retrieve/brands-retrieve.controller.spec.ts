import { Test, TestingModule } from '@nestjs/testing';
import { BrandsRetrieveController } from './brands-retrieve.controller';

describe('BrandsRetrieveController', () => {
  let controller: BrandsRetrieveController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BrandsRetrieveController],
    }).compile();

    controller = module.get<BrandsRetrieveController>(BrandsRetrieveController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
