import { glpiComputers } from 'src/responsivas/entities/computers.entity';
import { glpiComputerModels } from 'src/responsivas/entities/computersModels.entity';
import { glpiManufacturers } from 'src/responsivas/entities/manufacturers.entity';
import { glpiUserCategories } from 'src/responsivas/entities/userCategories.entity';
import { glpiUserTitle } from 'src/responsivas/entities/userTitles.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn } from 'typeorm';

@Entity('glpi_users')
export class glpiUsers {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  password: string;

  @Column({ type: 'timestamp', nullable: true })
  password_last_update: Date;

  @Column({ nullable: true })
  phone: string;

  @Column({ nullable: true })
  phone2: string;

  @Column({ nullable: true })
  mobile: string;

  @Column({ nullable: true })
  realname: string;

  @Column({ nullable: true })
  firstname: string;

  @Column({ type: 'int', unsigned: true, default: 0 })
  locations_id: number;

  @Column({ nullable: true })
  language: string;

  @Column({ type: 'int', default: 0 })
  use_mode: number;

  @Column({ nullable: true })
  list_limit: number;

  @Column({ type: 'tinyint', default: 1 })
  is_active: number;

  @Column({ type: 'text', nullable: true })
  comment: string;

  @Column({ type: 'int', unsigned: true, default: 0 })
  auths_id: number;

  @Column({ type: 'int', default: 0 })
  authtype: number;

  @Column({ type: 'timestamp', nullable: true })
  last_login: Date;

  @Column({ type: 'timestamp', nullable: true })
  date_mod: Date;

  @Column({ type: 'timestamp', nullable: true })
  date_sync: Date;

  @Column({ type: 'tinyint', default: 0 })
  is_deleted: number;

  @Column({ type: 'int', unsigned: true, default: 0 })
  profiles_id: number;

  @Column({ type: 'int', unsigned: true, default: 0 })
  entities_id: number;

  // @Column({ type: 'int', unsigned: true, default: 0 })
  // usertitles_id: number;

  // @Column({ type: 'int', unsigned: true, default: 0 })
  // usercategories_id: number;

  @ManyToOne(() => glpiUserTitle, title => title.users)
  @JoinColumn({ name: 'usertitles_id' })
  title: glpiUserTitle;

  @ManyToOne(() => glpiUserCategories, models => models.users)
  @JoinColumn({ name: 'usercategories_id' })
  category: glpiUserCategories;

  @Column({ nullable: true })
  date_format: number;
 
  @Column({ nullable: true })
  number_format: number;

  @Column({ nullable: true })
  names_format: number;

  @Column({ nullable: true })
  csv_delimiter: string;

  @Column({ type: 'tinyint', nullable: true })
  is_ids_visible: number;

  @Column({ type: 'tinyint', nullable: true })
  use_flat_dropdowntree: number;

  @Column({ type: 'tinyint', nullable: true })
  show_jobs_at_login: number;

  @Column({ nullable: true })
  priority_1: string;

  @Column({ nullable: true })
  priority_2: string;

  @Column({ nullable: true })
  priority_3: string;

  @Column({ nullable: true })
  priority_4: string;

  @Column({ nullable: true })
  priority_5: string;

  @Column({ nullable: true })
  priority_6: string;

  @Column({ type: 'tinyint', nullable: true })
  followup_private: number;

  @Column({ type: 'tinyint', nullable: true })
  task_private: number;

  @Column({ type: 'int', unsigned: true, nullable: true })
  default_requesttypes_id: number;

  @Column({ nullable: true })
  password_forget_token: string;

  @Column({ type: 'timestamp', nullable: true })
  password_forget_token_date: Date;

  @Column({ type: 'text', nullable: true })
  user_dn: string;

  @Column({ nullable: true })
  registration_number: string;

  @Column({ type: 'tinyint', nullable: true })
  show_count_on_tabs: number;

  @Column({ nullable: true })
  refresh_views: number;

  @Column({ type: 'tinyint', nullable: true })
  set_default_tech: number;

  @Column({ nullable: true })
  personal_token: string;

  @Column({ type: 'timestamp', nullable: true })
  personal_token_date: Date;

  @Column({ nullable: true })
  api_token: string;

  @Column({ type: 'timestamp', nullable: true })
  api_token_date: Date;

  @Column({ nullable: true })
  cookie_token: string;

  @Column({ type: 'timestamp', nullable: true })
  cookie_token_date: Date;

  @Column({ nullable: true })
  display_count_on_home: number;

  @Column({ type: 'tinyint', nullable: true })
  notification_to_myself: number;

  @Column({ nullable: true })
  duedateok_color: string;

  @Column({ nullable: true })
  duedatewarning_color: string;

  @Column({ nullable: true })
  duedatecritical_color: string;

  @Column({ nullable: true })
  duedatewarning_less: number;

  @Column({ nullable: true })
  duedatecritical_less: number;

  @Column({ nullable: true })
  duedatewarning_unit: string;

  @Column({ nullable: true })
  duedatecritical_unit: string;

  @Column({ type: 'text', nullable: true })
  display_options: string;

  @Column({ type: 'tinyint', default: 0 })
  is_deleted_ldap: number;

  @Column({ nullable: true })
  pdffont: string;

  @Column({ nullable: true })
  picture: string;

  @Column({ type: 'timestamp', nullable: true })
  begin_date: Date;

  @Column({ type: 'timestamp', nullable: true })
  end_date: Date;

  @Column({ type: 'tinyint', nullable: true })
  keep_devices_when_purging_item: number;

  @Column({ type: 'longtext', nullable: true })
  privatebookmarkorder: string;

  @Column({ type: 'tinyint', nullable: true })
  backcreated: number;

  @Column({ nullable: true })
  task_state: number;

  @Column({ nullable: true })
  palette: string;

  @Column({ nullable: true })
  page_layout: string;

  @Column({ type: 'tinyint', nullable: true })
  fold_menu: number;

  @Column({ type: 'tinyint', nullable: true })
  fold_search: number;

  @Column({ type: 'text', nullable: true })
  savedsearches_pinned: string;

  @Column({ nullable: true })
  timeline_order: string;

  @Column({ type: 'text', nullable: true })
  itil_layout: string;

  @Column({ nullable: true })
  richtext_layout: string;

  @Column({ type: 'tinyint', nullable: true })
  set_default_requester: number;

  @Column({ type: 'tinyint', nullable: true })
  lock_autolock_mode: number;

  @Column({ type: 'tinyint', nullable: true })
  lock_directunlock_notification: number;

  @Column({ type: 'timestamp', nullable: true })
  date_creation: Date;

  @Column({ type: 'tinyint', nullable: true, default: 0 })
  highcontrast_css: number;

  @Column({ type: 'text', nullable: true })
  plannings: string;

  @Column({ nullable: true })
  sync_field: string;

  @Column({ type: 'int', unsigned: true, default: 0 })
  groups_id: number;

  @Column({ type: 'int', unsigned: true, default: 0 })
  users_id_supervisor: number;

  @Column({ nullable: true })
  timezone: string;

  @Column({ nullable: true })
  default_dashboard_central: string;

  @Column({ nullable: true })
  default_dashboard_assets: string;

  @Column({ nullable: true })
  default_dashboard_helpdesk: string;

  @Column({ nullable: true })
  default_dashboard_mini_ticket: string;

  @Column({ type: 'tinyint', nullable: true, default: 0 })
  default_central_tab: number;

  @Column({ nullable: true })
  nickname: string;

  @Column({ type: 'tinyint', nullable: true, default: 0 })
  timeline_action_btn_layout: number;

  @Column({ type: 'tinyint', nullable: true, default: 0 })
  timeline_date_format: number;

  @OneToMany(() => glpiComputers, (computer) => computer.user)
  computers: glpiComputers[];

}

