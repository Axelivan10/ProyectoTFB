import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Responsivas')
export class responsivasEntity {
    @PrimaryGeneratedColumn() id:string;
}
