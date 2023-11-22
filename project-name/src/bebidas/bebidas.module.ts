import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BebidasController } from './bebidas.controller';
import { BebidasService } from './bebidas.service';
import { BebidasEntity } from './entities/bebida.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([BebidasEntity])
  ],
  controllers: [BebidasController],
  providers: [BebidasService]
})
export class BebidasModule {}
