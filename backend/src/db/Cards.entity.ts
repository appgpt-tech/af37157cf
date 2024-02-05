//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("Cards")
export class CardsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable: true})
cardID: string;

@Column({nullable: true})
setID: string;

@Column({nullable: true})
cardName: string;

@Column({nullable: true})
serial: string;

@Column({nullable: true})
type: string;

@Column({nullable: true})
rarity: string;

@Column({nullable: true})
condition: string;

@Column({nullable: true})
imageURL: string;


}
