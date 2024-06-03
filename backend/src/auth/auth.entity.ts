import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Auth')
export class AuthEntity {
    
    @PrimaryGeneratedColumn() 
    id:string;

    user: string;
    password: string;
}
