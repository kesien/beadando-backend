import { Entity, Column, Index, PrimaryColumn } from 'typeorm';

@Entity()
export class Befiz {
  @Index()
  @Column()
  azon: number;

  @PrimaryColumn()
  datum: Date;

  @Column()
  osszeg: number;
}
