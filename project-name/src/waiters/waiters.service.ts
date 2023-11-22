import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateWaiterDto } from './dto/create-waiter.dto';
import { UpdateWaiterDto } from './dto/update-waiter.dto';
import { WaiterEntity } from './entities/waiter.entity';

@Injectable()
export class WaitersService {
  constructor(
    @InjectRepository(WaiterEntity)
    private waitersRepository: Repository<WaiterEntity>,
  ) {}
  async create(createWaiterDto: CreateWaiterDto): Promise<WaiterEntity> {
    console.log(createWaiterDto)
    const myNewW = this.waitersRepository.create(createWaiterDto);
    console.log(myNewW)
    const myG = await this.waitersRepository.save(myNewW);
    return myNewW
  }

  async findAll() {
    return await Promise.all(await this.waitersRepository.find());
  
  }

  findOne(name: string) {
    return this.waitersRepository.findOneBy({
      name: name
    })
  }

  update(id: number, updateWaiterDto: UpdateWaiterDto) {
    return `This action updates a #${id} waiter`;
  }

  async remove(name: string) {
    const findoDelete = await this.waitersRepository.findOneBy({
      name,
    })
    console.log(findoDelete)
    return await this.waitersRepository.delete(findoDelete)
  }
}
