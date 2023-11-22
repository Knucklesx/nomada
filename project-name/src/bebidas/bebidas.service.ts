import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBebidaDto } from './dto/create-bebida.dto';
import { UpdateBebidaDto } from './dto/update-bebida.dto';
import { BebidasEntity } from './entities/bebida.entity';

@Injectable()
export class BebidasService {
  constructor(
    @InjectRepository(BebidasEntity)
    private BebidasRepository: Repository<BebidasEntity>,
  ) {}
  create(createBebidaDto: CreateBebidaDto) {
    return 'This action adds a new bebida';
  }

  async findAll() {
    return await this.BebidasRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} bebida`;
  }

  update(id: number, updateBebidaDto: UpdateBebidaDto) {
    return `This action updates a #${id} bebida`;
  }

  remove(id: number) {
    return `This action removes a #${id} bebida`;
  }
}
