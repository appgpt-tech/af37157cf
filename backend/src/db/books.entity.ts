//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("books")
export class booksEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable: true})
title: string;

@Column({nullable: true})
author: string;

@Column({nullable: true})
genre: string;

@Column({nullable: true})
bookCover: string;


}
