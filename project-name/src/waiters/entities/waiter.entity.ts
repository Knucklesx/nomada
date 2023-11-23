import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';


@Entity({ name: 'waiters'})
export class WaiterEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  pass: string;

  @Column()
  total_sale: number;

  // @Column()
  // cod_waiter: number;

  @CreateDateColumn()
  created_date: Date;
  @DeleteDateColumn()
  deleted_date: Date;
  @UpdateDateColumn()
  updated_date: Date;

}
