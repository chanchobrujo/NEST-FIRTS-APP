import { Module } from '@nestjs/common';
import { AuthenticationModule } from './module/authentication.module';
import { BrandsModule } from './module/brands.module';
import { CarsModule } from './module/cars.module';

@Module({
  imports: [AuthenticationModule, CarsModule, BrandsModule],
})
export class AppModule {}
