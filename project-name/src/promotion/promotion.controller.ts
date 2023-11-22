import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { PromotionService } from './promotion.service';

type HalJsonResponse = {
  data: object | [];
};

@Controller('promotion')
export class PromotionController {
  constructor(private readonly promotionService: PromotionService) {}

  @Post()
  create(@Body() createPromotionDto: any) {
    return this.promotionService.create(createPromotionDto);
  }

  @Get()
  async findAll(): Promise<HalJsonResponse> {
    const promoPrato = await this.promotionService.findAllPratos();
    const promoBurguer = await this.promotionService.findAllBurguer();

    return {
      data: {
        promoBurguer,
        promoPrato,
      },
    };
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.promotionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePromotionDto: any) {
    return this.promotionService.update(+id, updatePromotionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.promotionService.remove(+id);
  }
}
