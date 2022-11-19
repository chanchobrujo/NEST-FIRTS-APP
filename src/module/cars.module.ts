import { Module } from '@nestjs/common';
import { CarsRetrieveController } from 'src/controllers/cars/cars-retrieve/cars-retrieve.controller';
import { CarsServiceController } from 'src/controllers/cars/cars-service/cars-service.controller';
import { BrandsService } from 'src/providers/brands/brands.service';
import { CarsService } from 'src/providers/cars/cars.service';

@Module({
  controllers: [CarsRetrieveController, CarsServiceController],
  providers: [CarsService],
})
export class CarsModule {}
