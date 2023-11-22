import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BurguersService } from './burguers.service';
import { CreateBurguerDto } from './dto/create-burguer.dto';
import { UpdateBurguerDto } from './dto/update-burguer.dto';

@Controller('burguers')
export class BurguersController {
  constructor(private readonly burguersService: BurguersService) {}

  @Post()
  create(@Body() createBurguerDto: CreateBurguerDto) {
    return this.burguersService.create(createBurguerDto);
  }

  @Get()
  findAll() {
    return this.burguersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.burguersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBurguerDto: UpdateBurguerDto) {
    return this.burguersService.update(+id, updateBurguerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.burguersService.remove(+id);
  }
}
