// Source code generated by AppGPT (www.appgpt.tech)

//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("inventory")
export class inventoryEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("integer", { nullable: true })
  user: number;

  @Column("integer", { nullable: true })
  card: number;

  @Column("date", { nullable: true })
  DateAdded: Date;
}
