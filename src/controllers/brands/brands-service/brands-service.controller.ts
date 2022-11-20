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
import { BrandRequest } from 'src/model/request/BrandRequest';
import { MessageResponse } from 'src/model/response/MessageResponse';
import { BrandsService } from 'src/service/brands/brands.service';

@UsePipes(ValidationPipe)
@Controller('brands-service')
export class BrandsServiceController {
  constructor(private readonly service: BrandsService) {}

  @Post('save')
  public async saveCar(
    @Body() request: BrandRequest,
  ): Promise<MessageResponse> {
    return await this.service.save(request);
  }
}
