import { Controller, Get, Param, ParseUUIDPipe } from '@nestjs/common';

import { CarsService } from 'src/providers/cars/cars.service';
import { CarsResponse } from 'src/models/response/CarsResponse';

@Controller('cars-retrieve/')
export class CarsRetrieveController {
  constructor(private readonly service: CarsService) {}

  @Get('')
  public getData(): Array<CarsResponse> {
    return this.service.retrieveCars();
  }

  @Get('byId/:id')
  public getDataById(@Param('id', ParseUUIDPipe) id: string): CarsResponse {
    return this.service.retrieveCarById(id);
  }
}
