import {
  Body,
  Post,
  Patch,
  Param,
  Delete,
  UsePipes,
  Controller,
  ParseUUIDPipe,
  ValidationPipe,
} from '@nestjs/common';

import { CarsRequest } from 'src/models/request/CarsRequest';
import { CarsService } from 'src/providers/cars/cars.service';
import { MessageResponse } from 'src/models/response/MessageResponse';

@UsePipes(ValidationPipe)
@Controller('cars-service/')
export class CarsServiceController {
  constructor(private readonly service: CarsService) {}

  @Post('save')
  public saveCar(@Body() request: CarsRequest): MessageResponse {
    return this.service.save(request);
  }

  @Patch('update/:id')
  public updateCar(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() request: CarsRequest,
  ): MessageResponse {
    return this.service.update(id, request);
  }

  @Delete('delete/:id')
  public delete(@Param('id', ParseUUIDPipe) id: string): MessageResponse {
    return this.service.delete(id);
  }
}
