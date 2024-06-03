import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('glpi_phonemodels')
export class glpiPhoneModels {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  name: string;

  @Column({ type: 'text', nullable: true })
  comment: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  product_number: string;

  @Column({ type: 'timestamp', nullable: true })
  date_mod: Date;

  @Column({ type: 'timestamp', nullable: true })
  date_creation: Date;

  @Column({ type: 'text', nullable: true })
  picture_front: string;

  @Column({ type: 'text', nullable: true })
  picture_rear: string;

  @Column({ type: 'text', nullable: true })
  pictures: string;
}