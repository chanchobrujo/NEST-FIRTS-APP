import { Test, TestingModule } from '@nestjs/testing';
import { BrandsServiceController } from './brands-service.controller';

describe('BrandsServiceController', () => {
  let controller: BrandsServiceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BrandsServiceController],
    }).compile();

    controller = module.get<BrandsServiceController>(BrandsServiceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
