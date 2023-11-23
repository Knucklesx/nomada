import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { WaitersModule } from './../waiters/waiters.module';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './jtw.strategy';
import { LocalStrategy } from './local.strategy';
import { LoginService } from './login.service';

@Module({
  providers: [LoginService, LocalStrategy, JwtStrategy],
  controllers: [AuthController],
  imports: [
    ConfigModule.forRoot(),
    PassportModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (config: ConfigService) => ({
        secret: config.get('JWT_SECRET'),
        //singOptions: { expiresIn: '7d' },
      }),
      inject: [ConfigService],
    }),
    WaitersModule,
  ],
  exports: [LoginService],
})
export class LoginModule {}
