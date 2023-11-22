import { Injectable } from '@nestjs/common';
import { BurguersService } from 'src/burguers/burguers.service';
import { PratosService } from 'src/pratos/pratos.service';


@Injectable()
export class PromotionService {
  constructor(
    private pratosService: PratosService,
    private burguersService: BurguersService,
  ){}
  create(createPromotionDto: any) {
    return 'This action adds a new promotion';
  }

  async findAllPratos() {
  // async findAll() {
    const promoPrato = await this.pratosService.findAllPromotions();
    // const promoBurguer = await this.burguersService.findAllPromotions();

    return promoPrato
    // return promoPrato
  }

  async findAllBurguer() {
    const promoBurguer = await this.burguersService.findAllPromotions();
    return promoBurguer;
  }

  findOne(id: number) {
    return `This action returns a #${id} promotion`;
  }

  update(id: number, updatePromotionDto: any) {
    return `This action updates a #${id} promotion`;
  }

  remove(id: number) {
    return `This action removes a #${id} promotion`;
  }
}
