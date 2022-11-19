import { IsString, MinLength } from 'class-validator';

export class CarsRequest {
  @IsString({ message: "Variable 'name' no encontrada." })
  @MinLength(3, { message: 'Debe tener 3 caracteres como minimo.' })
  readonly name: string;
}
