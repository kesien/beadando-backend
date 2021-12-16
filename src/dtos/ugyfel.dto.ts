import { Expose } from 'class-transformer';
import { IsNumber, IsOptional, MaxLength, MinLength } from 'class-validator';

export class UgyfelDto {
  @Expose()
  @IsOptional()
  azon: number;
  @Expose()
  @MaxLength(30)
  nev: string;
  @Expose()
  @IsNumber()
  szulev: number;
  @Expose()
  @IsNumber()
  irszam: number;
  @Expose()
  @MinLength(3)
  @MaxLength(3)
  orsz: string;
}
