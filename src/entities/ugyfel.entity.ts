import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Ugyfel {
  @PrimaryGeneratedColumn()
  azon: number;

  @Column({ length: 30 })
  nev: string;

  @Column({ width: 4 })
  szulev: number;

  @Column({ width: 4 })
  irszam: number;

  @Column({ length: 3 })
  orsz: string;
}
