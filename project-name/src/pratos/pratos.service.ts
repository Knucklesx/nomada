import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePratoDto } from './dto/create-prato.dto';
import { UpdatePratoDto } from './dto/update-prato.dto';
import { PratosEntity } from './entities/prato.entity';

@Injectable()
export class PratosService {
  constructor(
    @InjectRepository(PratosEntity)
    private PratosRepository: Repository<PratosEntity>,
  ) {}
    create(createPratoDto: CreatePratoDto) {
    return 'This action adds a new prato';
  }

  async findAll() {
    return await this.PratosRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} prato`;
  }

  update(id: number, updatePratoDto: UpdatePratoDto) {
    return `This action updates a #${id} prato`;
  }

  remove(id: number) {
    return `This action removes a #${id} prato`;
  }
}
