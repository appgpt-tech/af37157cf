//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("LeaveRequests")
export class LeaveRequestsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("text",{nullable: true})
requestId: string;

@Column("integer",{nullable: true})
employeeId: number;

@Column("text",{nullable: true})
typeOfLeave: string;

@Column("date",{nullable: true})
startDate: Date;

@Column("date",{nullable: true})
endDate: Date;

@Column("text",{nullable: true})
reason: string;

@Column("text",{nullable: true})
approvalStatus: string;

@Column("integer",{nullable: true})
approverUserId: number;


}
