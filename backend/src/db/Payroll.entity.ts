// Source code generated by AppGPT (www.appgpt.tech)

 //to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("Payroll")
export class PayrollEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("integer",{nullable: true})
payrollId: number;

@Column("integer",{nullable: true})
employeeId: number;

@Column("date",{nullable: true})
periodStartDate: Date;

@Column("date",{nullable: true})
periodEndDate: Date;

@Column("real",{nullable: true})
grossSalary: number;

@Column("real",{nullable: true})
deductions: number;

@Column("real",{nullable: true})
netSalary: number;

@Column("date",{nullable: true})
payDate: Date;

@Column("integer",{nullable: true})
overtimeHours: number;

@Column("real",{nullable: true})
overtimePay: number;


}
