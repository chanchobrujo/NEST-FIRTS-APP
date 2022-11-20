import { IsString, MinLength } from 'class-validator';

export class BrandRequest {
  @IsString({ message: "Variable 'name' no encontrada." })
  @MinLength(3, { message: 'Debe tener 3 caracteres como minimo.' })
  readonly name: string;
  readonly state: boolean;
}
