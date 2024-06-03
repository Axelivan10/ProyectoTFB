import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { glpiComputers } from './computers.entity';

@Entity('glpi_infocoms')
export class glpiInfocom {
  @PrimaryGeneratedColumn()
  id: number;

  // @Column({ type: 'int', unsigned: true, default: 0 })
  // items_id: number;

  @ManyToOne(() => glpiComputers, computer => computer.infocom)
  @JoinColumn({ name: 'items_id' })
  items: glpiComputers;

  @Column({ type: 'varchar', length: 100 })
  itemtype: string;

  @Column({ type: 'int', unsigned: true, default: 0 })
  entities_id: number;

  @Column({ type: 'tinyint', default: 0 })
  is_recursive: number;

  @Column({ type: 'date', nullable: true })
  buy_date: Date;

  @Column({ type: 'date', nullable: true })
  use_date: Date;

  @Column({ type: 'int', default: 0 })
  warranty_duration: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  warranty_info: string;

  @Column({ type: 'int', unsigned: true, default: 0 })
  suppliers_id: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  order_number: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  delivery_number: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  immo_number: string;

  @Column({ type: 'decimal', precision: 20, scale: 4, default: 0.0000 })
  value: number;

  @Column({ type: 'decimal', precision: 20, scale: 4, default: 0.0000 })
  warranty_value: number;

  @Column({ type: 'int', default: 0 })
  sink_time: number;

  @Column({ type: 'int', default: 0 })
  sink_type: number;

  @Column({ type: 'float', default: 0 })
  sink_coeff: number;

  @Column({ type: 'text', nullable: true })
  comment: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  bill: string;

  @Column({ type: 'int', unsigned: true, default: 0 })
  budgets_id: number;

  @Column({ type: 'int', default: 0 })
  alert: number;

  @Column({ type: 'date', nullable: true })
  order_date: Date;

  @Column({ type: 'date', nullable: true })
  delivery_date: Date;

  @Column({ type: 'date', nullable: true })
  inventory_date: Date;

  @Column({ type: 'date', nullable: true })
  warranty_date: Date;

  @CreateDateColumn({ type: 'timestamp', nullable: true })
  date_creation: Date;

  @UpdateDateColumn({ type: 'timestamp', nullable: true })
  date_mod: Date;

  @Column({ type: 'timestamp', nullable: true })
  decommission_date: Date;

  @Column({ type: 'int', unsigned: true, default: 0 })
  businesscriticities_id: number;
  
}
