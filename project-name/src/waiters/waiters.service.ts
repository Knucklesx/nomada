import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EncrypterService } from 'src/auth/help/encrypter.service';
import { Repository } from 'typeorm';
import { UpdateWaiterDto } from './dto/update-waiter.dto';
import { WaiterEntity } from './entities/waiter.entity';

@Injectable()
export class WaitersService {
  constructor(
    @InjectRepository(WaiterEntity)
    private waitersRepository: Repository<WaiterEntity>,
  ) {}
  async create(username: string, password: string): Promise<WaiterEntity> {
    const hash = await EncrypterService.encryptPassword(password);
    const newWaiter = this.waitersRepository.create({
      name: username,
      pass: hash,
      total_sale: 0,
    });
    return await this.waitersRepository.save(newWaiter);
  }

  async findCredentialByUsername(name: string) {
    return await this.waitersRepository.findOneBy({
      name,
    });
  }

  async findAll() {
    return await Promise.all(await this.waitersRepository.find());
  }

  findOne(name: string) {
    return this.waitersRepository.findOneBy({
      name: name,
    });
  }

  update(id: number, updateWaiterDto: UpdateWaiterDto) {
    return `This action updates a #${id} waiter`;
  }

  async remove(name: string) {
    const findoDelete = await this.waitersRepository.findOneBy({
      name,
    });
    console.log(findoDelete);
    return await this.waitersRepository.delete(findoDelete);
  }
}
