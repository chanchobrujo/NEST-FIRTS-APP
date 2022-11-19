import { Module } from '@nestjs/common';
import { BrandsRetrieveController } from 'src/controllers/brands/brands-retrieve/brands-retrieve.controller';
import { BrandsServiceController } from 'src/controllers/brands/brands-service/brands-service.controller';
import { BrandsService } from 'src/providers/brands/brands.service';

@Module({
  controllers: [BrandsRetrieveController, BrandsServiceController],
  providers: [BrandsService],
})
export class BrandsModule {}
