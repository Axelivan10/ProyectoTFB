import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller';
import { glpiUsers } from '../user/user.entity';
import { UserService } from './user.service';

@Module({
  imports: [TypeOrmModule.forFeature([glpiUsers])],
  providers: [UserService],
  controllers: [UserController]
})
export class UserModule { }
