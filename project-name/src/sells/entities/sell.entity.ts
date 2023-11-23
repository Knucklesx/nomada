import { PratosEntity } from "src/pratos/entities/prato.entity";
import { Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class SellEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => PratosEntity, (prato) => prato.id)
  pratos: PratosEntity;

}
