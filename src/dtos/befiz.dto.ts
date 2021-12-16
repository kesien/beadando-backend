import { IsDateString, IsNumber } from 'class-validator';

export class BefizDto {
  @IsNumber()
  azon: number;

  @IsDateString()
  datum: Date;

  @IsNumber()
  osszeg: number;
}
