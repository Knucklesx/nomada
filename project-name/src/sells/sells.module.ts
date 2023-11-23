import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WaiterEntity } from 'src/waiters/entities/waiter.entity';
import { SellsController } from './sells.controller';
import { SellsService } from './sells.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([WaiterEntity])
  ],
  controllers: [SellsController],
  providers: [SellsService]
})
export class SellsModule {}
