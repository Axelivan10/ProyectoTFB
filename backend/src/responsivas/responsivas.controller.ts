import { Body, Controller, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ResponsivasService } from './responsivas.service';
import { glpiUsers } from 'src/user/user.entity';
import { responsivaDto } from './responsivas.dto';

@Controller('responsivas')
export class ResponsivasController {
  constructor(private readonly responsivasService: ResponsivasService) {}

  @Get('getusers')
  async getAllUsers() {
    return this.responsivasService.getUsers();
  }

  @Get('getComputers')
  async getAllComputers() {
    return this.responsivasService.getComputers();
  }

  @Get('getusers/:id')
  async getUserById(@Param('id', ParseIntPipe) id: number): Promise<glpiUsers> {
    return this.responsivasService.getUsersById(id);
  }

  @Get('getComputersRelation/:id')
  async getComputerRelation(@Param('id') id: number) {
    return this.responsivasService.getComputerRelation(id);
  }

  @Post('postUser')
  async postUser(@Body() userData: responsivaDto ) : Promise<glpiUsers> {
    return this.responsivasService.postUser(userData);
  }

  @Put('updateUser')
  async updateUser(@Body() userData: responsivaDto ){
    console.log(userData)
    return this.responsivasService.updateUser(userData);
  }

  @Get('check')
  GetInfoParameter() {
    return 'Hola mundo';
  }
}

