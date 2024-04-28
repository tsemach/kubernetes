import { Entity, Column, PrimaryColumn, BaseEntity, ManyToOne, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, SaveOptions, BeforeInsert, AfterLoad } from 'typeorm';

@Entity('users')
export class UsersEntity extends BaseEntity {

  @PrimaryColumn({ type: 'uuid' })
  id: string;

  @Column({ name: 'name', type: 'varchar'})
  name: string;

  @CreateDateColumn({ type: 'timestamptz' })
  createDate?: string

  @UpdateDateColumn ({ type: 'timestamptz' })
  updateDate?: string

  @DeleteDateColumn ({ type: 'timestamptz' })
  deleteDate?: string

  @BeforeInsert() 
  fixBefor() {
    console.log("UserEntity: before insert called, this:", this)
  }

  @AfterLoad() 
  fixAfter() {
    console.log("UserEntity: aftet load called, this:", this)
  }
  
}