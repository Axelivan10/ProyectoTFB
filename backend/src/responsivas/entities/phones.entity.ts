import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity('glpi_phones')
export class glpiPhones {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int', unsigned: true, default: 0 })
  entities_id: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  name: string;

  @Column({ type: 'timestamp', nullable: true })
  date_mod: Date;

  @Column({ type: 'varchar', length: 255, nullable: true })
  contact: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  contact_num: string;

  @Column({ type: 'int', unsigned: true, default: 0 })
  users_id_tech: number;

  @Column({ type: 'int', unsigned: true, default: 0 })
  groups_id_tech: number;

  @Column({ type: 'text', nullable: true })
  comment: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  serial: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  otherserial: string;

  @Column({ type: 'int', unsigned: true, default: 0 })
  locations_id: number;

  @Column({ type: 'int', unsigned: true, default: 0 })
  phonetypes_id: number;

  @Column({ type: 'int', unsigned: true, default: 0 })
  phonemodels_id: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  brand: string;

  @Column({ type: 'int', unsigned: true, default: 0 })
  phonepowersupplies_id: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  number_line: string;

  @Column({ type: 'tinyint', default: 0 })
  have_headset: number;

  @Column({ type: 'tinyint', default: 0 })
  have_hp: number;

  @Column({ type: 'int', unsigned: true, default: 0 })
  manufacturers_id: number;

  @Column({ type: 'tinyint', default: 0 })
  is_global: number;

  @Column({ type: 'tinyint', default: 0 })
  is_deleted: number;

  @Column({ type: 'tinyint', default: 0 })
  is_template: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  template_name: string;

  @Column({ type: 'int', unsigned: true, default: 0 })
  users_id: number;

  @Column({ type: 'int', unsigned: true, default: 0 })
  groups_id: number;

  @Column({ type: 'int', unsigned: true, default: 0 })
  states_id: number;

  @Column({ type: 'decimal', precision: 20, scale: 4, default: 0.0000 })
  ticket_tco: number;

  @Column({ type: 'tinyint', default: 0 })
  is_dynamic: number;

  @Column({ type: 'int', unsigned: true, default: 0 })
  autoupdatesystems_id: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  uuid: string;

  @Column({ type: 'timestamp', nullable: true })
  date_creation: Date;

  @Column({ type: 'tinyint', default: 0 })
  is_recursive: number;

  @Column({ type: 'timestamp', nullable: true })
  last_inventory_update: Date;
}
