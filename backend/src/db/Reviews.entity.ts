//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("Reviews")
export class ReviewsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("text",{nullable: true})
reviewId: string;

@Column("integer",{nullable: true})
productId: number;

@Column("integer",{nullable: true})
customerId: number;

@Column("integer",{nullable: true})
vendorId: number;

@Column("integer",{nullable: true})
rating: number;

@Column("text",{nullable: true})
reviewDetails: string;

@Column("date",{nullable: true})
date: Date;


}