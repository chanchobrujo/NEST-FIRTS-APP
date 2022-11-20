import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { Car } from 'src/documents/car.entity';
import { CarsRequest } from 'src/model/request/CarsRequest';
import { CarsResponse } from 'src/model/response/CarsResponse';
import { MessageResponse } from 'src/model/response/MessageResponse';

@Injectable()
export class CarsService {
  constructor(@InjectModel(Car.name) private readonly repository: Model<Car>) {}

  public async save(request: CarsRequest): Promise<MessageResponse> {
    await this.repository.create({ ...request });
    return { message: 'Carro guardado' };
  }

  public async delete(id: string): Promise<MessageResponse> {
    const car = await this.retrieveCarById(id);
    await this.repository.deleteOne({ _id: car.id });
    return { message: 'Carro eliminado' };
  }

  public async update(
    id: string,
    request: CarsRequest,
  ): Promise<MessageResponse> {
    const car = await this.retrieveCarById(id);
    if (car.name === request.name) {
      throw new BadRequestException('No valores repetidos.');
    }
    await this.repository.updateOne({ _id: car.id, name: request.name });
    return { message: 'Carro actualizado' };
  }

  public async retrieveCars(): Promise<Array<CarsResponse>> {
    const collection: Array<Car> = await this.repository.find();
    return collection.map(this.mapperCarResponse);
  }

  public async retrieveCarById(id: string): Promise<CarsResponse> {
    try {
      const car = await this.repository.findById(id);
      return this.mapperCarResponse(car);
    } catch (error) {
      throw new NotFoundException('Item not found.');
    }
  }

  private mapperCarResponse(car: Car): CarsResponse {
    return { id: car._id, name: car.name } as CarsResponse;
  }
}
