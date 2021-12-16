import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { AppService } from 'src/app.service';
import { UgyfelDto } from 'src/dtos/ugyfel.dto';
import { Serialize } from 'src/interceptors/serialize.interceptor';

@Serialize(UgyfelDto)
@Controller('ugyfel')
export class UgyfelController {
  constructor(private readonly appService: AppService) {}
  @Get()
  getAllUgyfel() {
    return this.appService.getAllUgyfel();
  }

  @Post()
  addNewUgyfel(@Body() ugyfel: UgyfelDto) {
    return this.appService.addUgyfel(ugyfel);
  }

  @Delete('/:id')
  @HttpCode(204)
  async deleteUgyfel(@Param('id') id: number) {
    await this.appService.deleteUgyfel(id);
  }
}
