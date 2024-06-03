import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { glpiUsers } from '../user/user.entity';
import { glpiComputers } from './entities/computers.entity';

@Injectable()
export class ResponsivasService {
  constructor(
    @InjectRepository(glpiUsers)
    private readonly responsivasRepository: Repository<glpiUsers>,
    @InjectRepository(glpiComputers)
    private readonly computersRepository: Repository<glpiComputers>,
  ) {}

  async getUsers(): Promise<glpiUsers[]> {
    return this.responsivasRepository.find();
  }

  async getComputers(): Promise<glpiComputers[]> {
    return this.computersRepository.find();
  }

  async getComputerRelation(id: number): Promise<glpiComputers[]> {
    return this.computersRepository.find({
      where: {
        user: {
          id: id,
        },
      },
      relations: ['user','model','manufacturer',"user.category","user.title",'infocom',],
    });
  }

  // async getComputerRelation(id: number): Promise<glpiInfocom[]> {
  //   return this.infocomRepository.find({
  //     where: {
  //       items: {
  //         user: {
  //           id: id,
  //         },
  //       },
  //     },
  //     relations: ['items', 'items.user', 'items.model', 'items.manufacturer', 'items.user.category', 'items.user.title'],
  //   });
  // }
  
  async getUsersById(id: number): Promise<glpiUsers> {
    const user = await this.responsivasRepository.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }

  async postUser(userData): Promise<glpiUsers> {
    try {
        if (!userData || !userData.user || userData.user.length === 0) {
            console.log("No user data provided.");
            return null;
        }

        let user;

        // Dependiendo de la clave proporcionada, realizamos la búsqueda correspondiente
        const key = userData.user[0].key;
        const value = userData.user[0].value;

        // Función auxiliar para obtener el valor correspondiente a una clave
        const getValue = (key) => {
            const index = userData.user.findIndex(u => u.key === key);
            return index !== -1 ? userData.user[index].value : null;
        };

      switch (key) {
        case "numeroColaborador":
          user = await this.responsivasRepository.findOneBy({ registration_number: value });
          console.log(user);
          return user;

        case "nombreUsuario":
          user = await this.responsivasRepository.findOneBy({ name: value });
          console.log(user);
          return user;

        case "nombres":
        case "apellidos":
          const firstname = getValue("nombres");
          const realname = getValue("apellidos");

          if (firstname && realname) {
            user = await this.responsivasRepository.find({
              where: {
                firstname: Like(`%${firstname}%`),
                realname: Like(`%${realname}%`)
              }
            });
          } else if (firstname) {
            user = await this.responsivasRepository.find({
              where: { firstname: Like(`%${firstname}%`) }
            });
          } else if (realname) {
            user = await this.responsivasRepository.find({
              where: { realname: Like(`%${realname}%`) }
            });
          } else {
            console.log("No valid search criteria provided.");
            return null;
          }
          console.log(user);
          return user;

        default:
          console.log("No valid key found.");
          return null;
      }

    } catch (error) {
        console.error("Error fetching user data:", error);
        throw error;
    }
  }

  async updateUser(userData) {
    try {
      const { registration_number } = userData;
  
      const user = await this.responsivasRepository.findOne({ where: { registration_number } });
  
      if (!user) {
        throw new Error('User not found');
      }
  
      const returnUser = await this.responsivasRepository.update({ registration_number }, userData);
  
      console.log(returnUser)

      return returnUser

    } catch (error) {
      console.error('Error updating user:', error.message);
      throw error;
    }
  }
  

}
  
  