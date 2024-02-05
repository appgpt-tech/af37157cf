//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("Payroll")
export class PayrollEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable: true})
payrollID: string;

@Column({nullable: true})
employeeID: string;

@Column({nullable: true})
period: string;

@Column({nullable: true})
grossSalary: string;

@Column({nullable: true})
deductions: string;

@Column({nullable: true})
netSalary: string;

@Column({nullable: true})
payDate: string;

@Column({nullable: true})
overtimeHours: string;

@Column({nullable: true})
overtimePay: string;


}
