import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { Brand } from 'src/documents/brand.entity';
import { BrandRequest } from 'src/model/request/BrandRequest';
import { BrandResponse } from 'src/model/response/BrandResponse';
import { MessageResponse } from 'src/model/response/MessageResponse';

@Injectable()
export class BrandsService {
  constructor(
    @InjectModel(Brand.name) private readonly repository: Model<Brand>,
  ) {}

  public async save(request: BrandRequest): Promise<MessageResponse> {
    const findBrand = await this.retrieveCarByName(request.name);
    if (!!findBrand) {
      throw new BadRequestException('Data repetida.');
    }
    const brand = {
      name: request.name,
      state: true,
      insertDate: new Date(),
    } as Brand;
    await this.repository.create(brand);
    return { message: 'Marca registrada.' };
  }

  public async retrieveBrand(): Promise<Array<BrandResponse>> {
    const collection: Array<Brand> = await this.repository.find();
    return collection.map(this.mapperBrandResponse);
  }

  public async retrieveCarById(id: string): Promise<BrandResponse> {
    try {
      const car = await this.repository.findById(id);
      return this.mapperBrandResponse(car);
    } catch (error) {
      throw new NotFoundException('Item not found.');
    }
  }

  public async retrieveCarByName(name: string): Promise<BrandResponse> {
    try {
      const brand = await this.repository.findOne({ name });
      return this.mapperBrandResponse(brand);
    } catch (error) {
      throw new NotFoundException('Item not found.');
    }
  }

  private mapperBrandResponse(brand: Brand): BrandResponse {
    return {
      id: brand._id,
      name: brand.name,
      state: brand ? 'Activo' : 'Dado de baja',
      insertDate: brand.insertDate.toISOString(),
    } as BrandResponse;
  }
}
