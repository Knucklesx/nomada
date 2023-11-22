import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBurguerDto } from './dto/create-burguer.dto';
import { UpdateBurguerDto } from './dto/update-burguer.dto';
import { BurguersEntity } from './entities/burguer.entity';

@Injectable()
export class BurguersService {
  constructor(
    @InjectRepository(BurguersEntity)
    private BurguersRepository: Repository<BurguersEntity>,  ) {}
  create(createBurguerDto: CreateBurguerDto) {
    return 'This action adds a new burguer';
  }

  async findAll() {
    return await this.BurguersRepository.find();
  }

  async findAllPromotions() {
    const promo = await this.BurguersRepository
      .createQueryBuilder('burguer')
      .where('burguer.promotion = :promotion', { promotion: 1 })
      .getMany();
  
    return promo;
  }

  findOne(id: number) {
    return `This action returns a #${id} burguer`;
  }

  update(id: number, updateBurguerDto: UpdateBurguerDto) {
    return `This action updates a #${id} burguer`;
  }

  remove(id: number) {
    return `This action removes a #${id} burguer`;
  }
}
