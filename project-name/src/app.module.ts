import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PratosEntity } from './pratos/entities/prato.entity';
import { PratosModule } from './pratos/pratos.module';

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
        username: configService.get('DATABASE_USER'),
        password: configService.get('DATABASE_PASSWORD'),
        database: configService.get('DATABASE_NAME'),
        legacySpatialSupport: false,
        logging: true,
        entities: [
          PratosEntity
        ],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    PratosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
