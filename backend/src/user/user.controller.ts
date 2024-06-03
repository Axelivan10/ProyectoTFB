import { Controller } from '@nestjs/common';
import { UserService } from './user.service';
import { glpiUsers } from './user.entity';

@Controller('rest/user')
export class UserController {

  constructor(private service: UserService) { }

  
}
