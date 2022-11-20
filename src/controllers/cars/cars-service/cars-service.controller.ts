import {
  Body,
  Post,
  Patch,
  Param,
  Delete,
  UsePipes,
  Controller,
  ValidationPipe,
} from '@nestjs/common';

import { CarsRequest } from 'src/model/request/CarsRequest';
import { CarsService } from 'src/service/cars/cars.service';
import { MessageResponse } from 'src/model/response/MessageResponse';

@UsePipes(ValidationPipe)
@Controller('cars-service/')
export class CarsServiceController {
  constructor(private readonly service: CarsService) {}

  @Post('save')
  public async saveCar(@Body() request: CarsRequest): Promise<MessageResponse> {
    return await this.service.save(request);
  }

  @Patch('update/:id')
  public updateCar(
    @Param('id') id: string,
    @Body() request: CarsRequest,
  ): Promise<MessageResponse> {
    return this.service.update(id, request);
  }

  @Delete('delete/:id')
  public async delete(@Param('id') id: string): Promise<MessageResponse> {
    return await this.service.delete(id);
  }
}
