import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { glpiUsers } from "../../user/user.entity";
import { glpiComputers } from './computers.entity';

@Entity('glpi_manufacturers')
export class glpiManufacturers {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255, nullable: true })
    name: string;
  
    @Column({ type: 'text', nullable: true })
    comment: string;
  
    @Column({ type: 'timestamp', nullable: true })
    date_mod: Date;
  
    @Column({ type: 'timestamp', nullable: true })
    date_creation: Date;

    @OneToMany(() => glpiComputers, (computer) => computer.manufacturer)
    computers: glpiComputers[];

}