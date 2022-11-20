import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { Brand, BrandSchema } from 'src/documents/brand.entity';
import { BrandsService } from 'src/service/brands/brands.service';
import { BrandsServiceController } from 'src/controllers/brands/brands-service/brands-service.controller';
import { BrandsRetrieveController } from 'src/controllers/brands/brands-retrieve/brands-retrieve.controller';

@Module({
  controllers: [BrandsRetrieveController, BrandsServiceController],
  providers: [BrandsService],
  imports: [
    MongooseModule.forFeature([{ name: Brand.name, schema: BrandSchema }]),
  ],
})
export class BrandsModule {}
