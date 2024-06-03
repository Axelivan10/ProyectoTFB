import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResponsivasController } from './responsivas.controller';
import { responsivasEntity } from './entities/responsivas.entity';
import { ResponsivasService } from './responsivas.service';
import { glpiUsers } from '../user/user.entity';
import { glpiComputers } from './entities/computers.entity';
import { glpiManufacturers } from './entities/manufacturers.entity';
import { glpiComputerModels } from './entities/computersModels.entity';
import { glpiUserTitle } from './entities/userTitles.entity';
import { glpiUserCategories } from './entities/userCategories.entity';
import { glpiInfocom } from './entities/infocoms.entity';

@Module({
  imports: [TypeOrmModule.forFeature([responsivasEntity, glpiUsers, glpiComputers, glpiManufacturers, glpiComputerModels,
     glpiUserTitle, glpiUserCategories, glpiInfocom])],
  providers: [ResponsivasService],
  controllers: [ResponsivasController]
})
export class ResponsivasModule { }
