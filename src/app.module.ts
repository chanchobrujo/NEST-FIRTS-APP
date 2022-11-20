import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { CarsModule } from './module/cars.module';
import { BrandsModule } from './module/brands.module';
import { AuthenticationModule } from './module/authentication.module';

@Module({
  imports: [
    CarsModule,
    BrandsModule,
    AuthenticationModule,
    MongooseModule.forRoot('mongodb://localhost:27017/nest-api-sales'),
  ],
})
export class AppModule {}
