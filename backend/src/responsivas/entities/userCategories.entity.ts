import { glpiUsers } from 'src/user/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity('glpi_usercategories')
export class glpiUserCategories {
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

    @OneToMany(() => glpiUsers, (user) => user.category)
    users: glpiUsers[];

}
