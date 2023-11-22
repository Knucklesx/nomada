import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateWaiterDto } from './dto/create-waiter.dto';
import { UpdateWaiterDto } from './dto/update-waiter.dto';
import { WaitersService } from './waiters.service';

@Controller('waiters')
export class WaitersController {
  constructor(private readonly waitersService: WaitersService) {}

  @Post()
  async create(@Body() createWaiterDto: CreateWaiterDto) {
    return await this.waitersService.create(createWaiterDto);
  }

  @Get()
  findAll() {
    return this.waitersService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.waitersService.findOne(+id);
  // }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWaiterDto: UpdateWaiterDto) {
    return this.waitersService.update(+id, updateWaiterDto);
  }

  @Delete('/delete/:username')
  remove(@Param('username') username: string) {
  // remove(@Param('id') id: string) {
    console.log(username)
    // return this.waitersService.remove(name);

    return username;
  }
}
