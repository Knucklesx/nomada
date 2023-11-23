import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginModule } from './auth/login.module';
import { BebidasModule } from './bebidas/bebidas.module';
import { BebidasEntity } from './bebidas/entities/bebida.entity';
import { BurguersModule } from './burguers/burguers.module';
import { BurguersEntity } from './burguers/entities/burguer.entity';
import { PratosEntity } from './pratos/entities/prato.entity';
import { PratosModule } from './pratos/pratos.module';
import { PromotionModule } from './promotion/promotion.module';
import { SellEntity } from './sells/entities/sell.entity';
import { SellsModule } from './sells/sells.module';
import { WaiterEntity } from './waiters/entities/waiter.entity';
import { WaitersModule } from './waiters/waiters.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('DATABASE_HOST'),
        port: configService.get('DATABASE_PORT'),
        username: configService.get('DATABASE_USERNAME'),
        password: configService.get('DATABASE_PASSWORD'),
        database: configService.get('DATABASE_NAME'),
        legacySpatialSupport: false,
        logging: false,
        entities: [
          PratosEntity,
          BebidasEntity,
          BurguersEntity,
          WaiterEntity,
          SellEntity,

        ],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    PratosModule,
    BebidasModule,
    BurguersModule,
    PromotionModule,
    WaitersModule,
    SellsModule,
    LoginModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
