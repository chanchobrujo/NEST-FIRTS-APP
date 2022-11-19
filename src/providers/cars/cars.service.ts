import { v4 as uuid } from 'uuid';
import { CarsRequest } from 'src/models/request/CarsRequest';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CarsResponse } from 'src/models/response/CarsResponse';
import { MessageResponse } from 'src/models/response/MessageResponse';

@Injectable()
export class CarsService {
  private cars: Array<CarsResponse> = [
    { id: uuid(), name: 'toyota' },
    { id: uuid(), name: 'honda' },
  ];

  public delete(id: string): MessageResponse {
    this.retrieveCarById(id);
    this.cars = this.cars.filter((car) => car.id !== id);
    return { message: 'Carro eliminado' };
  }

  public update(id: string, request: CarsRequest): MessageResponse {
    this.checkNameNoRepeted(request.name);
    let car = this.retrieveCarById(id);
    this.cars = this.cars.map((carFind) => {
      if (carFind.id === id) return { ...car, ...request, id };
      return carFind;
    });
    return { message: 'Carro actualizado' };
  }

  public save(request: CarsRequest): MessageResponse {
    this.cars.push({ id: uuid(), ...request });
    return { message: 'Carro guardado' };
  }

  public retrieveCars(): Array<CarsResponse> {
    return this.cars;
  }

  public retrieveCarById(id: string): CarsResponse {
    const car = this.cars.find((car: CarsResponse) => car.id == id);
    if (!car) throw new NotFoundException('Car with id ' + id + ' not found.');
    return car;
  }

  private checkNameNoRepeted(name: string): void {
    const car = this.cars.find((car) => car.name === name);
    if (car) throw new NotFoundException('Car with name ' + name + ' exits.');
  }
}
