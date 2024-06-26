import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './auth.controller';
import { AuthEntity } from './auth.entity';
import { AuthService } from './auth.service';

@Module({
  imports: [TypeOrmModule.forFeature([AuthEntity])],
  providers: [AuthService],
  controllers: [AuthController]
})
export class AuthModule { }
