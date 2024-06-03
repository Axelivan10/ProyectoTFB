import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { glpiUsers } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService{

    constructor(
        @InjectRepository(glpiUsers)
        private readonly userRepository: Repository<glpiUsers>,
    ) {}


}
