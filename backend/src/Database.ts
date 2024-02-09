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
    let data: any = {"Users":[{"userId":"userId 1","name":"name 1","email":"email 1","password":"password 1","role":"role 1","id":43},{"userId":"userId 2","name":"name 2","email":"email 2","password":"password 2","role":"role 2","id":99},{"userId":"userId 3","name":"name 3","email":"email 3","password":"password 3","role":"role 3","id":24},{"userId":"userId 4","name":"name 4","email":"email 4","password":"password 4","role":"role 4","id":0},{"userId":"userId 5","name":"name 5","email":"email 5","password":"password 5","role":"role 5","id":84}],"Employees":[{"employeeId":"employeeId 1","firstName":"firstName 1","lastName":"lastName 1","middleName":"middleName 1","dateOfBirth":"2024-01-02T15:52:53.494Z","gender":"gender 1","nationality":"nationality 1","maritalStatus":"maritalStatus 1","email":"email 1","phoneNumber":"phoneNumber 1","street":"street 1","city":"city 1","state":"state 1","zipCode":"zipCode 1","country":"country 1","departmentTeam":"departmentTeam 1","positionRole":"positionRole 1","managerSupervisor":"managerSupervisor 1","employmentType":"employmentType 1","startDate":"2023-06-30T02:48:50.748Z","endDate":"2023-04-30T19:20:48.253Z","salaryInformation":0.71,"profilePicture":"profilePicture 1","id":22},{"employeeId":"employeeId 2","firstName":"firstName 2","lastName":"lastName 2","middleName":"middleName 2","dateOfBirth":"2024-12-03T16:45:54.675Z","gender":"gender 2","nationality":"nationality 2","maritalStatus":"maritalStatus 2","email":"email 2","phoneNumber":"phoneNumber 2","street":"street 2","city":"city 2","state":"state 2","zipCode":"zipCode 2","country":"country 2","departmentTeam":"departmentTeam 2","positionRole":"positionRole 2","managerSupervisor":"managerSupervisor 2","employmentType":"employmentType 2","startDate":"2024-10-05T01:05:51.383Z","endDate":"2023-08-14T22:55:22.948Z","salaryInformation":0.75,"profilePicture":"profilePicture 2","id":62},{"employeeId":"employeeId 3","firstName":"firstName 3","lastName":"lastName 3","middleName":"middleName 3","dateOfBirth":"2024-04-06T06:17:37.147Z","gender":"gender 3","nationality":"nationality 3","maritalStatus":"maritalStatus 3","email":"email 3","phoneNumber":"phoneNumber 3","street":"street 3","city":"city 3","state":"state 3","zipCode":"zipCode 3","country":"country 3","departmentTeam":"departmentTeam 3","positionRole":"positionRole 3","managerSupervisor":"managerSupervisor 3","employmentType":"employmentType 3","startDate":"2024-08-03T12:00:16.993Z","endDate":"2023-09-02T06:58:40.749Z","salaryInformation":0.74,"profilePicture":"profilePicture 3","id":5},{"employeeId":"employeeId 4","firstName":"firstName 4","lastName":"lastName 4","middleName":"middleName 4","dateOfBirth":"2024-10-27T05:05:54.149Z","gender":"gender 4","nationality":"nationality 4","maritalStatus":"maritalStatus 4","email":"email 4","phoneNumber":"phoneNumber 4","street":"street 4","city":"city 4","state":"state 4","zipCode":"zipCode 4","country":"country 4","departmentTeam":"departmentTeam 4","positionRole":"positionRole 4","managerSupervisor":"managerSupervisor 4","employmentType":"employmentType 4","startDate":"2024-12-23T04:39:45.280Z","endDate":"2023-10-29T21:58:10.540Z","salaryInformation":0.63,"profilePicture":"profilePicture 4","id":76},{"employeeId":"employeeId 5","firstName":"firstName 5","lastName":"lastName 5","middleName":"middleName 5","dateOfBirth":"2023-07-30T09:45:02.864Z","gender":"gender 5","nationality":"nationality 5","maritalStatus":"maritalStatus 5","email":"email 5","phoneNumber":"phoneNumber 5","street":"street 5","city":"city 5","state":"state 5","zipCode":"zipCode 5","country":"country 5","departmentTeam":"departmentTeam 5","positionRole":"positionRole 5","managerSupervisor":"managerSupervisor 5","employmentType":"employmentType 5","startDate":"2023-11-15T20:58:38.445Z","endDate":"2025-02-07T11:26:41.881Z","salaryInformation":0.7,"profilePicture":"profilePicture 5","id":58}],"Evaluations":[{"reviewId":"reviewId 1","employeeId":1,"periodStartDate":"2024-04-18T05:54:16.099Z","periodEndDate":"2024-09-17T06:48:48.038Z","goalsObjectives":"goalsObjectives 1","achievements":"achievements 1","improvementAreas":"improvementAreas 1","feedbackFromSupervisor":"feedbackFromSupervisor 1","overallRating":1,"recommendations":"recommendations 1","id":57},{"reviewId":"reviewId 2","employeeId":2,"periodStartDate":"2024-02-25T22:22:13.815Z","periodEndDate":"2023-03-03T15:08:25.996Z","goalsObjectives":"goalsObjectives 2","achievements":"achievements 2","improvementAreas":"improvementAreas 2","feedbackFromSupervisor":"feedbackFromSupervisor 2","overallRating":2,"recommendations":"recommendations 2","id":8},{"reviewId":"reviewId 3","employeeId":3,"periodStartDate":"2023-05-19T14:31:10.632Z","periodEndDate":"2023-02-25T08:22:53.839Z","goalsObjectives":"goalsObjectives 3","achievements":"achievements 3","improvementAreas":"improvementAreas 3","feedbackFromSupervisor":"feedbackFromSupervisor 3","overallRating":3,"recommendations":"recommendations 3","id":36},{"reviewId":"reviewId 4","employeeId":4,"periodStartDate":"2023-02-17T18:10:07.327Z","periodEndDate":"2023-12-15T15:25:01.658Z","goalsObjectives":"goalsObjectives 4","achievements":"achievements 4","improvementAreas":"improvementAreas 4","feedbackFromSupervisor":"feedbackFromSupervisor 4","overallRating":4,"recommendations":"recommendations 4","id":47},{"reviewId":"reviewId 5","employeeId":5,"periodStartDate":"2024-02-20T02:29:37.935Z","periodEndDate":"2023-05-20T01:58:35.760Z","goalsObjectives":"goalsObjectives 5","achievements":"achievements 5","improvementAreas":"improvementAreas 5","feedbackFromSupervisor":"feedbackFromSupervisor 5","overallRating":5,"recommendations":"recommendations 5","id":22}],"Payroll":[{"payrollId":"payrollId 1","employeeId":1,"periodStartDate":"2024-01-08T17:04:26.227Z","periodEndDate":"2024-07-15T20:57:03.183Z","grossSalary":0.16,"deductions":0.48,"netSalary":0.19,"payDate":"2024-12-23T07:33:38.614Z","overtimeHours":0.96,"overtimePay":0.1,"id":18},{"payrollId":"payrollId 2","employeeId":2,"periodStartDate":"2024-06-13T02:46:49.253Z","periodEndDate":"2023-05-06T05:41:40.532Z","grossSalary":0.64,"deductions":0.56,"netSalary":0.05,"payDate":"2024-11-30T07:08:25.263Z","overtimeHours":0.64,"overtimePay":0.46,"id":41},{"payrollId":"payrollId 3","employeeId":3,"periodStartDate":"2023-05-08T01:12:16.477Z","periodEndDate":"2025-01-21T22:27:00.964Z","grossSalary":0.31,"deductions":0.16,"netSalary":0.63,"payDate":"2024-04-11T05:38:16.208Z","overtimeHours":0.44,"overtimePay":0.59,"id":22},{"payrollId":"payrollId 4","employeeId":4,"periodStartDate":"2023-07-21T09:25:09.167Z","periodEndDate":"2023-06-18T14:25:38.040Z","grossSalary":0.62,"deductions":0.07,"netSalary":0.35,"payDate":"2025-01-19T02:52:14.078Z","overtimeHours":0.56,"overtimePay":0.34,"id":91},{"payrollId":"payrollId 5","employeeId":5,"periodStartDate":"2024-04-25T11:25:50.234Z","periodEndDate":"2024-11-10T07:11:20.572Z","grossSalary":0.8,"deductions":0.17,"netSalary":0.05,"payDate":"2024-01-30T17:56:36.875Z","overtimeHours":0.24,"overtimePay":0.29,"id":57}],"LeaveRequests":[{"requestId":"requestId 1","employeeId":1,"typeOfLeave":"typeOfLeave 1","startDate":"2023-03-04T02:40:58.441Z","endDate":"2024-08-26T19:43:03.285Z","reason":"reason 1","approvalStatus":"approvalStatus 1","approverUserId":1,"id":75},{"requestId":"requestId 2","employeeId":2,"typeOfLeave":"typeOfLeave 2","startDate":"2024-08-29T14:01:36.396Z","endDate":"2024-09-20T13:18:56.012Z","reason":"reason 2","approvalStatus":"approvalStatus 2","approverUserId":2,"id":13},{"requestId":"requestId 3","employeeId":3,"typeOfLeave":"typeOfLeave 3","startDate":"2025-01-27T14:16:33.165Z","endDate":"2024-10-26T07:02:13.943Z","reason":"reason 3","approvalStatus":"approvalStatus 3","approverUserId":3,"id":70},{"requestId":"requestId 4","employeeId":4,"typeOfLeave":"typeOfLeave 4","startDate":"2024-04-30T10:31:48.349Z","endDate":"2023-08-23T08:49:02.354Z","reason":"reason 4","approvalStatus":"approvalStatus 4","approverUserId":4,"id":48},{"requestId":"requestId 5","employeeId":5,"typeOfLeave":"typeOfLeave 5","startDate":"2024-09-17T04:23:12.786Z","endDate":"2023-06-26T18:38:08.054Z","reason":"reason 5","approvalStatus":"approvalStatus 5","approverUserId":5,"id":72}]};
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

