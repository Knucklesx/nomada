import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BurguersController } from './burguers.controller';
import { BurguersService } from './burguers.service';
import { BurguersEntity } from './entities/burguer.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([BurguersEntity])
  ],
  controllers: [BurguersController],
  providers: [BurguersService],
  exports:[BurguersService],

  
})
export class BurguersModule {}
