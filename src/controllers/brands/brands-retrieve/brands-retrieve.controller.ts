import { Controller, Get, Param } from '@nestjs/common';

import { BrandResponse } from 'src/model/response/BrandResponse';
import { BrandsService } from 'src/service/brands/brands.service';

@Controller('brands-retrieve/')
export class BrandsRetrieveController {
  constructor(private readonly service: BrandsService) {}

  @Get('')
  public getData(): Promise<Array<BrandResponse>> {
    return this.service.retrieveBrand();
  }

  @Get('byId/:id')
  public getDataById(@Param('id') id: string): Promise<BrandResponse> {
    return this.service.retrieveCarById(id);
  }
}
