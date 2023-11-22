import { Module } from '@nestjs/common';
import { BurguersModule } from 'src/burguers/burguers.module';
import { PratosModule } from 'src/pratos/pratos.module';
import { PromotionController } from './promotion.controller';
import { PromotionService } from './promotion.service';

@Module({
  imports: [
    PratosModule,
    BurguersModule,
  ],
  controllers: [PromotionController],
  providers: [PromotionService]
})
export class PromotionModule {}
