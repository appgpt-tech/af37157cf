//Class to create tables and seed new database
import { DataSource } from "typeorm";
import { DBConfiguration } from "./Configuration";
import { SettingsEntity } from "./db/Settings.entity";
//autogenerate imports based on resources
import { UsersEntity } from "./db/Users.entity";
import { CustomersEntity } from "./db/Customers.entity";
import { WorkoutsEntity } from "./db/Workouts.entity";
import { NutritionEntity } from "./db/Nutrition.entity";
import { HealthMetricsEntity } from "./db/HealthMetrics.entity";
import { NotificationsEntity } from "./db/Notifications.entity";
import { SupportTicketsEntity } from "./db/SupportTickets.entity";

export class Database {
  static dbConfiguration: DBConfiguration;
  public static ds: DataSource;

  static async Initialize(dbConfiguration: DBConfiguration) {
    Database.dbConfiguration = dbConfiguration;
    let dbConfig: any = dbConfiguration as any;
    //Autogenerate entities array from resource names

    dbConfig.entities = [SettingsEntity, UsersEntity, CustomersEntity, WorkoutsEntity, NutritionEntity, HealthMetricsEntity, NotificationsEntity, SupportTicketsEntity];
    Database.ds = new DataSource(dbConfig);
    await Database.ds.initialize();

    //TODO: Drop all tables


    await Database.Seed();
  }
  static async Seed() {
    let data: any = {"Users":[{"userId":"userId 1","name":"name 1","email":"email 1","password":"password 1","role":"role 1","id":5},{"userId":"userId 2","name":"name 2","email":"email 2","password":"password 2","role":"role 2","id":47},{"userId":"userId 3","name":"name 3","email":"email 3","password":"password 3","role":"role 3","id":38},{"userId":"userId 4","name":"name 4","email":"email 4","password":"password 4","role":"role 4","id":82},{"userId":"userId 5","name":"name 5","email":"email 5","password":"password 5","role":"role 5","id":32}],"Customers":[{"customerId":"customerId 1","email":"email 1","password":"password 1","name":"name 1","age":1,"gender":"gender 1","weight":0.36,"height":0.03,"healthConditions":"healthConditions 1","goals":"goals 1","dietaryPreferences":"dietaryPreferences 1","billingAddress":"billingAddress 1","country":"country 1","phone":"phone 1","id":63},{"customerId":"customerId 2","email":"email 2","password":"password 2","name":"name 2","age":2,"gender":"gender 2","weight":0.05,"height":0.27,"healthConditions":"healthConditions 2","goals":"goals 2","dietaryPreferences":"dietaryPreferences 2","billingAddress":"billingAddress 2","country":"country 2","phone":"phone 2","id":47},{"customerId":"customerId 3","email":"email 3","password":"password 3","name":"name 3","age":3,"gender":"gender 3","weight":0.49,"height":0.47,"healthConditions":"healthConditions 3","goals":"goals 3","dietaryPreferences":"dietaryPreferences 3","billingAddress":"billingAddress 3","country":"country 3","phone":"phone 3","id":58},{"customerId":"customerId 4","email":"email 4","password":"password 4","name":"name 4","age":4,"gender":"gender 4","weight":1,"height":0.68,"healthConditions":"healthConditions 4","goals":"goals 4","dietaryPreferences":"dietaryPreferences 4","billingAddress":"billingAddress 4","country":"country 4","phone":"phone 4","id":64},{"customerId":"customerId 5","email":"email 5","password":"password 5","name":"name 5","age":5,"gender":"gender 5","weight":0.4,"height":0.27,"healthConditions":"healthConditions 5","goals":"goals 5","dietaryPreferences":"dietaryPreferences 5","billingAddress":"billingAddress 5","country":"country 5","phone":"phone 5","id":86}],"Workouts":[{"workoutId":"workoutId 1","customerId":1,"type":"type 1","duration":0.1,"intensity":"intensity 1","caloriesBurned":0.58,"date":"2024-05-21T13:12:14.241Z","id":55},{"workoutId":"workoutId 2","customerId":2,"type":"type 2","duration":0.21,"intensity":"intensity 2","caloriesBurned":0.86,"date":"2023-11-30T05:33:57.048Z","id":91},{"workoutId":"workoutId 3","customerId":3,"type":"type 3","duration":0.4,"intensity":"intensity 3","caloriesBurned":0.42,"date":"2024-11-16T07:40:01.898Z","id":93},{"workoutId":"workoutId 4","customerId":4,"type":"type 4","duration":0.24,"intensity":"intensity 4","caloriesBurned":0.91,"date":"2024-02-14T15:07:32.549Z","id":71},{"workoutId":"workoutId 5","customerId":5,"type":"type 5","duration":0.93,"intensity":"intensity 5","caloriesBurned":0.63,"date":"2024-06-21T14:18:07.349Z","id":73}],"Nutrition":[{"mealId":"mealId 1","customerId":1,"foodItem":"foodItem 1","quantity":0.98,"calories":0.5,"macronutrients":"macronutrients 1","date":"2025-01-16T05:59:31.444Z","id":43},{"mealId":"mealId 2","customerId":2,"foodItem":"foodItem 2","quantity":0.59,"calories":0.35,"macronutrients":"macronutrients 2","date":"2024-08-23T08:07:31.545Z","id":52},{"mealId":"mealId 3","customerId":3,"foodItem":"foodItem 3","quantity":0.76,"calories":0.58,"macronutrients":"macronutrients 3","date":"2023-07-19T11:39:49.416Z","id":3},{"mealId":"mealId 4","customerId":4,"foodItem":"foodItem 4","quantity":0.09,"calories":0.52,"macronutrients":"macronutrients 4","date":"2024-02-18T02:00:21.140Z","id":91},{"mealId":"mealId 5","customerId":5,"foodItem":"foodItem 5","quantity":0.12,"calories":0.96,"macronutrients":"macronutrients 5","date":"2024-01-23T17:45:59.159Z","id":86}],"HealthMetrics":[{"metricId":"metricId 1","customerId":1,"type":"type 1","value":0.97,"unit":"unit 1","date":"2023-04-16T20:11:38.670Z","id":29},{"metricId":"metricId 2","customerId":2,"type":"type 2","value":0.68,"unit":"unit 2","date":"2024-02-15T17:40:07.373Z","id":91},{"metricId":"metricId 3","customerId":3,"type":"type 3","value":0.57,"unit":"unit 3","date":"2023-06-20T05:43:05.899Z","id":43},{"metricId":"metricId 4","customerId":4,"type":"type 4","value":0.05,"unit":"unit 4","date":"2023-06-10T18:22:00.550Z","id":80},{"metricId":"metricId 5","customerId":5,"type":"type 5","value":0.22,"unit":"unit 5","date":"2023-06-11T21:04:27.196Z","id":18}],"Notifications":[{"notificationId":"notificationId 1","customerId":1,"type":"type 1","message":"message 1","dateScheduled":"2024-05-24T12:30:11.396Z","status":"status 1","id":27},{"notificationId":"notificationId 2","customerId":2,"type":"type 2","message":"message 2","dateScheduled":"2024-09-09T00:22:58.881Z","status":"status 2","id":74},{"notificationId":"notificationId 3","customerId":3,"type":"type 3","message":"message 3","dateScheduled":"2023-08-09T17:38:05.625Z","status":"status 3","id":43},{"notificationId":"notificationId 4","customerId":4,"type":"type 4","message":"message 4","dateScheduled":"2024-12-21T08:15:03.536Z","status":"status 4","id":8},{"notificationId":"notificationId 5","customerId":5,"type":"type 5","message":"message 5","dateScheduled":"2024-03-27T15:12:50.874Z","status":"status 5","id":8}],"SupportTickets":[{"ticketId":"ticketId 1","userId":1,"customerId":1,"description":"description 1","status":"status 1","creationDate":"2023-03-03T20:27:39.858Z","resolutionDate":"2023-12-28T07:46:59.493Z","id":5},{"ticketId":"ticketId 2","userId":2,"customerId":2,"description":"description 2","status":"status 2","creationDate":"2024-09-30T12:34:29.402Z","resolutionDate":"2024-01-17T15:05:30.132Z","id":8},{"ticketId":"ticketId 3","userId":3,"customerId":3,"description":"description 3","status":"status 3","creationDate":"2023-12-07T18:54:59.179Z","resolutionDate":"2024-03-13T14:14:59.390Z","id":82},{"ticketId":"ticketId 4","userId":4,"customerId":4,"description":"description 4","status":"status 4","creationDate":"2024-06-23T03:53:49.265Z","resolutionDate":"2024-09-20T20:03:15.601Z","id":43},{"ticketId":"ticketId 5","userId":5,"customerId":5,"description":"description 5","status":"status 5","creationDate":"2024-08-16T19:39:51.817Z","resolutionDate":"2023-05-26T12:11:21.234Z","id":14}]};
    //Autogenerate multiple such calls ie for each resource and its data object
    let isSeeded = await this.IsSeeded();
    //if (!isSeeded) {
    //forcing app recreation
    if (true){
      console.log('   Seeding database...');
      await this.SeedResource("UsersEntity", data.Users);
await this.SeedResource("CustomersEntity", data.Customers);
await this.SeedResource("WorkoutsEntity", data.Workouts);
await this.SeedResource("NutritionEntity", data.Nutrition);
await this.SeedResource("HealthMetricsEntity", data.HealthMetrics);
await this.SeedResource("NotificationsEntity", data.Notifications);
await this.SeedResource("SupportTicketsEntity", data.SupportTickets); 
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

