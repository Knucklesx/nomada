import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'burguers' })
export class BurguersEntity {
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
  @CreateDateColumn()
  created_date: Date;
  @DeleteDateColumn()
  deleted_date: Date;
  @UpdateDateColumn()
  updated_date: Date;
}
