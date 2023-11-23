import { SellEntity } from 'src/sells/entities/sell.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'pratos' })
export class PratosEntity {
  @PrimaryColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  price: number;
  @Column()
  open_to_sell: Boolean;
  @Column()
  promotion: Boolean;
  @Column()
  image: string;
  @Column()
  total_stock: number;

  @ManyToOne(() => SellEntity, (sell) => sell.pratos, { eager: true })
  pratos: SellEntity;

  @CreateDateColumn()
  created_date: Date;
  @DeleteDateColumn()
  deleted_date: Date;
  @UpdateDateColumn()
  updated_date: Date;
}
