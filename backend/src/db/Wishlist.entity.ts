//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("Wishlist")
export class WishlistEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable: true})
userID: string;

@Column({nullable: true})
cardID: string;

@Column({nullable: true})
insertedDate: string;


}
