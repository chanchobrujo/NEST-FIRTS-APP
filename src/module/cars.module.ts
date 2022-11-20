import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { CarsService } from 'src/service/cars/cars.service';
import { Car, CarSchema } from 'src/documents/car.entity';
import { CarsServiceController } from 'src/controllers/cars/cars-service/cars-service.controller';
import { CarsRetrieveController } from 'src/controllers/cars/cars-retrieve/cars-retrieve.controller';

@Module({
  controllers: [CarsRetrieveController, CarsServiceController],
  providers: [CarsService],
  imports: [MongooseModule.forFeature([{ name: Car.name, schema: CarSchema }])],
})
export class CarsModule {}
