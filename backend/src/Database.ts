//Class to create tables and seed new database
import { DataSource } from "typeorm";
import { DBConfiguration } from "./Configuration";
import { SettingsEntity } from "./db/Settings.entity";
//autogenerate imports based on resources
import { UsersEntity } from "./db/Users.entity";
import { EmployeesEntity } from "./db/Employees.entity";
import { EvaluationsEntity } from "./db/Evaluations.entity";
import { PayrollEntity } from "./db/Payroll.entity";
import { LeaveRequestsEntity } from "./db/LeaveRequests.entity";

export class Database {
  static dbConfiguration: DBConfiguration;
  public static ds: DataSource;

  static async Initialize(dbConfiguration: DBConfiguration) {
    Database.dbConfiguration = dbConfiguration;
    let dbConfig: any = dbConfiguration as any;
    //Autogenerate entities array from resource names

    dbConfig.entities = [SettingsEntity, UsersEntity, EmployeesEntity, EvaluationsEntity, PayrollEntity, LeaveRequestsEntity];
    Database.ds = new DataSource(dbConfig);
    await Database.ds.initialize();

    //TODO: Drop all tables


    await Database.Seed();
  }
  static async Seed() {
    let data: any = {"Users":[{"userID":"user1","name":"User One","email":"userone@example.com","password":"password1","role":"administrator"},{"userID":"user2","name":"User Two","email":"usertwo@example.com","password":"password2","role":"employee"},{"userID":"user3","name":"User Three","email":"userthree@example.com","password":"password3","role":"manager"}],"Employees":[{"employeeID":"E001","firstName":"John","lastName":"Doe","middleName":"K","dateOfBirth":"1990-12-30","gender":"Male","nationality":"American","maritalStatus":"Single","contactInformation":"johndoe@gmail.com, +1 234 567 890","address":"1234, Spring Avenue, NY, 10001, USA","departmentTeam":"IT","positionRole":"Developer","managerSupervisor":"M001","employmentType":"Full-time","startDate":"2021-01-01","endDate":"","salaryInformation":"80000","profilePicture":""},{"employeeID":"E002","firstName":"Jane","lastName":"Doe","middleName":"L","dateOfBirth":"1991-01-30","gender":"Female","nationality":"American","maritalStatus":"Married","contactInformation":"janedoe@gmail.com, +1 234 567 891","address":"1235, Summer Avenue, NY, 10002, USA","departmentTeam":"Marketing","positionRole":"Strategist","managerSupervisor":"M002","employmentType":"Part-time","startDate":"2020-05-01","endDate":"2022-05-01","salaryInformation":"40000","profilePicture":""},{"employeeID":"E003","firstName":"Jim","lastName":"Beam","middleName":"M","dateOfBirth":"1989-11-30","gender":"Male","nationality":"American","maritalStatus":"Single","contactInformation":"jimbeam@gmail.com, +1 234 567 892","address":"1236, Winter Avenue, NY, 10003, USA","departmentTeam":"Sales","positionRole":"Manager","managerSupervisor":"M003","employmentType":"Full-time","startDate":"2018-02-01","endDate":"","salaryInformation":"60000","profilePicture":""}],"Evaluations":[{"reviewID":"R001","employeeID":"E001","period":"2021-01-01 to 2022-01-01","goalsObjectives":"Develop new feature for product, Provide support for customer queries","achievements":"Successfully developed new feature, Resolved 80% customer queries","improvementAreas":"Improve time management skills","feedbackFromSupervisor":"Great work on developing new feature, Need to improve time management skills","overallRating":4,"recommendations":"Promotion to senior developer"},{"reviewID":"R002","employeeID":"E002","period":"2020-05-01 to 2021-05-01","goalsObjectives":"Increase brand awareness, Develop new marketing strategies","achievements":"Successfully increased brand awareness, Developed effective marketing strategies","improvementAreas":"Negotiation skills","feedbackFromSupervisor":"Great work on increasing brand awareness, Need to improve negotiation skills","overallRating":5,"recommendations":"Promotion to Marketing Manager"},{"reviewID":"R003","employeeID":"E003","period":"2018-02-01 to 2022-02-01","goalsObjectives":"Improve team performance, Increase sales","achievements":"Successfully improved team performance, Increased sales by 20%","improvementAreas":"Communication skills","feedbackFromSupervisor":"Excellent job at improving team performance, Need to improve communication skills","overallRating":4,"recommendations":"Training on communication skills"}],"Payroll":[{"payrollID":"P001","employeeID":"E001","period":"2021-01-01 to 2022-01-01","grossSalary":80000,"deductions":"Tax: 20000, Insurance: 5000","netSalary":55000,"payDate":"2022-01-01","overtimeHours":10,"overtimePay":1000},{"payrollID":"P002","employeeID":"E002","period":"2020-05-01 to 2021-05-01","grossSalary":40000,"deductions":"Tax: 8000, Insurance: 2000","netSalary":30000,"payDate":"2022-05-01","overtimeHours":5,"overtimePay":500},{"payrollID":"P003","employeeID":"E003","period":"2018-02-01 to 2022-02-01","grossSalary":60000,"deductions":"Tax: 12000, Insurance: 3000","netSalary":45000,"payDate":"2022-02-01","overtimeHours":8,"overtimePay":800}],"LeaveRequests":[{"requestID":"L001","employeeID":"E001","typeOfLeave":"Sick","startDate":"2022-01-15","endDate":"2022-01-20","reason":"Medical","approvalStatus":"Approved","approverUserID":"M001"},{"requestID":"L002","employeeID":"E002","typeOfLeave":"Personal","startDate":"2022-06-01","endDate":"2022-06-05","reason":"Travel","approvalStatus":"Pending","approverUserID":"M002"},{"requestID":"L003","employeeID":"E003","typeOfLeave":"Vacation","startDate":"2022-02-15","endDate":"2022-02-25","reason":"Family trip","approvalStatus":"Rejected","approverUserID":"M003"}]};
    //Autogenerate multiple such calls ie for each resource and its data object
    let isSeeded = await this.IsSeeded();
    //if (!isSeeded) {
    //forcing app recreation
    if (true){
      console.log('   Seeding database...');
      await this.SeedResource("UsersEntity", data.Users);
await this.SeedResource("EmployeesEntity", data.Employees);
await this.SeedResource("EvaluationsEntity", data.Evaluations);
await this.SeedResource("PayrollEntity", data.Payroll);
await this.SeedResource("LeaveRequestsEntity", data.LeaveRequests); 
      await this.SeedResource("SettingsEntity", {
        settingname: "isSeeded",
        settingvalue: "true",
      });
    }else{
      console.log('   Database seeded already!');
    }
  }
  static async IsSeeded() {
    const repo = Database.ds.getRepository("SettingsEntity");
    let rec: any = await repo.findOne({
      select: {
        settingname: true,
        settingvalue: true,
      },
      where: {
        settingname: "isSeeded",
      },
    });
    if (rec && rec.settingvalue) return true;
    return false;
  }
  static async SeedResource(resourceName: any, resourceData: any) {
    const repo = Database.ds.getRepository(resourceName);
    //await repo.clear();
    console.log('   Seeding table '+resourceName);
    await repo.upsert(resourceData, ["id"]);
  }
}

