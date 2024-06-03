import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { glpiUsers } from "../../user/user.entity";
import { glpiManufacturers } from './manufacturers.entity';
import { glpiComputerModels } from './computersModels.entity';
import { glpiInfocom } from './infocoms.entity';

@Entity('glpi_computers')
export class glpiComputers {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'int', unsigned: true })
    entities_id: number;

    @Column({ type: 'varchar', length: 255, nullable: true })
    name: string;

    @Column({ type: 'varchar', length: 255, nullable: true })
    serial: string;

    @Column({ type: 'varchar', length: 255, nullable: true })
    otherserial: string;

    @Column({ type: 'varchar', length: 255, nullable: true })
    contact: string;

    @Column({ type: 'varchar', length: 255, nullable: true })
    contact_num: string;

    @Column({ type: 'int', unsigned: true })
    users_id_tech: number;

    @Column({ type: 'int', unsigned: true })
    groups_id_tech: number;

    @Column({ type: 'text', nullable: true })
    comment: string;

    @Column({ type: 'timestamp', nullable: true })
    date_mod: Date;

    @Column({ type: 'int', unsigned: true })
    autoupdatesystems_id: number;

    @Column({ type: 'int', unsigned: true })
    locations_id: number;

    @Column({ type: 'int', unsigned: true })
    networks_id: number;

    // @Column({ type: 'int', unsigned: true })
    // computermodels_id: number;

    @ManyToOne(() => glpiComputerModels, models => models.computers)
    @JoinColumn({ name: 'computermodels_id' })
    model: glpiComputerModels;

    @Column({ type: 'int', unsigned: true })
    computertypes_id: number;

    @Column({ type: 'tinyint', width: 1, default: 0 })
    is_template: number;

    @Column({ type: 'varchar', length: 255, nullable: true })
    template_name: string;

    // @Column({ type: 'int', unsigned: true })
    // manufacturers_id: number;

    @ManyToOne(() => glpiManufacturers, manufacturers => manufacturers.computers)
    @JoinColumn({ name: 'manufacturers_id' })
    manufacturer: glpiManufacturers;

    @Column({ type: 'tinyint', width: 1, default: 0 })
    is_deleted: number;

    @Column({ type: 'tinyint', width: 1, default: 0 })
    is_dynamic: number;

    // @Column({ type: 'int', unsigned: true })
    // users_id: number;

    @ManyToOne(() => glpiUsers, userId => userId.computers)
    @JoinColumn({ name: 'users_id' })
    user: glpiUsers;

    @Column({ type: 'int', unsigned: true })
    groups_id: number;

    @Column({ type: 'int', unsigned: true })
    states_id: number;

    @Column({ type: 'decimal', precision: 20, scale: 4, default: '0.0000' })
    ticket_tco: number;

    @Column({ type: 'varchar', length: 255, nullable: true })
    uuid: string;

    @Column({ type: 'timestamp', nullable: true })
    date_creation: Date;

    @Column({ type: 'tinyint', width: 1, default: 0 })
    is_recursive: number;

    @Column({ type: 'timestamp', nullable: true })
    last_inventory_update: Date;

    @Column({ type: 'timestamp', nullable: true })
    last_boot: Date;

    @OneToMany(() => glpiInfocom, (infocom) => infocom.items)
    infocom: glpiInfocom[];
  
}