// Source code generated by AppGPT (www.appgpt.tech)

//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("sets")
export class setsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("text", { nullable: true })
  setname: string;

  @Column("date", { nullable: true })
  releasedate: Date;

  @Column("integer", { nullable: true })
  totalcards: number;
}
