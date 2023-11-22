import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PratosEntity } from './entities/prato.entity';
import { PratosController } from './pratos.controller';
import { PratosService } from './pratos.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([PratosEntity])
  ],
  controllers: [PratosController],
  providers: [PratosService],
  exports:[PratosService],
})
export class PratosModule {}
