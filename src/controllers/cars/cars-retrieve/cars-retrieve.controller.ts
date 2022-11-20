import { Controller, Get, Param } from '@nestjs/common';

import { CarsService } from 'src/service/cars/cars.service';
import { CarsResponse } from 'src/model/response/CarsResponse';

@Controller('cars-retrieve/')
export class CarsRetrieveController {
  constructor(private readonly service: CarsService) {}

  @Get('')
  public getData(): Promise<Array<CarsResponse>> {
    return this.service.retrieveCars();
  }

  @Get('byId/:id')
  public getDataById(@Param('id') id: string): Promise<CarsResponse> {
    return this.service.retrieveCarById(id);
  }
}
