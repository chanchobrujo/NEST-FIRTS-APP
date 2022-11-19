import { Controller } from '@nestjs/common';
import { BrandsService } from 'src/providers/brands/brands.service';

@Controller('brands-retrieve')
export class BrandsRetrieveController {
  constructor(private readonly service: BrandsService) {}
}
