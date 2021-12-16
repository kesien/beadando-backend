import { Injectable } from '@nestjs/common';
import { Befiz } from './entities/befiz.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ugyfel } from './entities/ugyfel.entity';
import { UgyfelDto } from './dtos/ugyfel.dto';
import { BefizDto } from './dtos/befiz.dto';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Befiz) private befizRepo: Repository<Befiz>,
    @InjectRepository(Ugyfel) private ugyfelRepo: Repository<Ugyfel>,
  ) {}

  getAllUgyfel() {
    return this.ugyfelRepo.find();
  }

  addUgyfel(ugyfel: UgyfelDto) {
    const newUgyfel = this.ugyfelRepo.create({
      nev: ugyfel.nev,
      szulev: ugyfel.szulev,
      irszam: ugyfel.irszam,
      orsz: ugyfel.orsz,
    });
    return this.ugyfelRepo.save(newUgyfel);
  }

  async deleteUgyfel(id: number) {
    const ugyfel = await this.ugyfelRepo.findOne(id);
    if (ugyfel) {
      this.ugyfelRepo.remove(ugyfel);
    }
  }

  getAllBefiz() {
    return this.befizRepo.find();
  }

  addBefiz(befiz: BefizDto) {
    const newBefiz = this.befizRepo.create({
      azon: befiz.azon,
      osszeg: befiz.osszeg,
      datum: new Date(),
    });
    this.befizRepo.save(newBefiz);
    return newBefiz;
  }
}
