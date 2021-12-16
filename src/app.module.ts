import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Befiz } from './entities/befiz.entity';
import { Ugyfel } from './entities/ugyfel.entity';
import { UgyfelController } from './ugyfel/ugyfel.controller';
import { BefizController } from './befiz/befiz.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'sql11.freesqldatabase.com',
      port: 3306,
      username: 'sql11459462',
      password: 'hQnT6R2tdl',
      database: 'sql11459462',
      entities: [join(__dirname, '**', '*.entity{.ts,.js}')],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Ugyfel, Befiz]),
  ],
  controllers: [AppController, UgyfelController, BefizController],
  providers: [AppService],
  exports: [AppService],
})
export class AppModule {}
