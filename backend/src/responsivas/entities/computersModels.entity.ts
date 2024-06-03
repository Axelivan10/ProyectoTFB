import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { glpiUsers } from "../../user/user.entity";
import { glpiComputers } from './computers.entity';

@Entity('glpi_computermodels')
export class glpiComputerModels {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255, nullable: true })
    name: string;

    @Column({ type: 'text', nullable: true })
    comment: string;

    @Column({ type: 'varchar', length: 255, nullable: true })
    product_number: string;

    @Column({ type: 'int', default: 0 })
    weight: number;

    @Column({ type: 'int', default: 1 })
    required_units: number;

    @Column({ type: 'float', default: 1 })
    depth: number;

    @Column({ type: 'int', default: 0 })
    power_connections: number;

    @Column({ type: 'int', default: 0 })
    power_consumption: number;

    @Column({ type: 'tinyint', default: 0 })
    is_half_rack: number;

    @Column({ type: 'text', nullable: true })
    picture_front: string;

    @Column({ type: 'text', nullable: true })
    picture_rear: string;

    @Column({ type: 'text', nullable: true })
    pictures: string;

    @Column({ type: 'timestamp', nullable: true })
    date_mod: Date;

    @Column({ type: 'timestamp', nullable: true })
    date_creation: Date;

    @OneToMany(() => glpiComputers, (computer) => computer.model)
    computers: glpiComputers[];

}