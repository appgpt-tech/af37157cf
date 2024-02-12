//Class to create tables and seed new database
import { DataSource } from "typeorm";
import { DBConfiguration } from "./Configuration";
import { SettingsEntity } from "./db/Settings.entity";
//autogenerate imports based on resources
import { UsersEntity } from "./db/Users.entity";
import { CardsEntity } from "./db/Cards.entity";
import { SetsEntity } from "./db/Sets.entity";
import { InventoryEntity } from "./db/Inventory.entity";
import { WishlistEntity } from "./db/Wishlist.entity";

export class Database {
  static dbConfiguration: DBConfiguration;
  public static ds: DataSource;

  static async Initialize(dbConfiguration: DBConfiguration) {
    Database.dbConfiguration = dbConfiguration;
    let dbConfig: any = dbConfiguration as any;
    //Autogenerate entities array from resource names

    dbConfig.entities = [SettingsEntity, UsersEntity, CardsEntity, SetsEntity, InventoryEntity, WishlistEntity];
    Database.ds = new DataSource(dbConfig);
    await Database.ds.initialize();

    //TODO: Drop all tables


    await Database.Seed();
  }
  static async Seed() {
    let data: any = {"Users":[{"userId":1,"email":"email 1","name":"name 1","id":43},{"userId":2,"email":"email 2","name":"name 2","id":82},{"userId":3,"email":"email 3","name":"name 3","id":82},{"userId":4,"email":"email 4","name":"name 4","id":89},{"userId":5,"email":"email 5","name":"name 5","id":99}],"Cards":[{"cardId":1,"setId":1,"cardName":"cardName 1","serial":"serial 1","type":"type 1","rarity":"rarity 1","condition":"condition 1","imageUrl":"imageUrl 1","id":16},{"cardId":2,"setId":2,"cardName":"cardName 2","serial":"serial 2","type":"type 2","rarity":"rarity 2","condition":"condition 2","imageUrl":"imageUrl 2","id":59},{"cardId":3,"setId":3,"cardName":"cardName 3","serial":"serial 3","type":"type 3","rarity":"rarity 3","condition":"condition 3","imageUrl":"imageUrl 3","id":63},{"cardId":4,"setId":4,"cardName":"cardName 4","serial":"serial 4","type":"type 4","rarity":"rarity 4","condition":"condition 4","imageUrl":"imageUrl 4","id":67},{"cardId":5,"setId":5,"cardName":"cardName 5","serial":"serial 5","type":"type 5","rarity":"rarity 5","condition":"condition 5","imageUrl":"imageUrl 5","id":11}],"Sets":[{"setId":1,"setName":"setName 1","releaseDate":"2023-03-01T13:24:15.583Z","totalCards":1,"id":18},{"setId":2,"setName":"setName 2","releaseDate":"2024-08-11T02:53:39.477Z","totalCards":2,"id":28},{"setId":3,"setName":"setName 3","releaseDate":"2023-06-19T15:34:19.759Z","totalCards":3,"id":15},{"setId":4,"setName":"setName 4","releaseDate":"2023-03-07T19:09:31.243Z","totalCards":4,"id":2},{"setId":5,"setName":"setName 5","releaseDate":"2024-04-26T22:00:25.991Z","totalCards":5,"id":36}],"Inventory":[{"userId":1,"cardId":1,"recordedDate":"2023-05-02T10:16:25.474Z","id":21},{"userId":2,"cardId":2,"recordedDate":"2024-12-20T08:06:55.890Z","id":37},{"userId":3,"cardId":3,"recordedDate":"2023-07-20T00:43:17.011Z","id":4},{"userId":4,"cardId":4,"recordedDate":"2025-01-31T10:39:04.256Z","id":97},{"userId":5,"cardId":5,"recordedDate":"2024-03-02T03:33:09.955Z","id":48}],"Wishlist":[{"userId":1,"cardId":1,"insertedDate":"2024-12-25T08:04:59.890Z","id":71},{"userId":2,"cardId":2,"insertedDate":"2024-04-09T20:39:22.058Z","id":82},{"userId":3,"cardId":3,"insertedDate":"2024-02-26T13:17:34.732Z","id":89},{"userId":4,"cardId":4,"insertedDate":"2023-05-31T04:09:30.763Z","id":76},{"userId":5,"cardId":5,"insertedDate":"2024-05-11T18:43:55.539Z","id":23}]};
    //Autogenerate multiple such calls ie for each resource and its data object
    let isSeeded = await this.IsSeeded();
    //if (!isSeeded) {
    //forcing app recreation
    if (true){
      console.log('   Seeding database...');
      await this.SeedResource("UsersEntity", data.Users);
await this.SeedResource("CardsEntity", data.Cards);
await this.SeedResource("SetsEntity", data.Sets);
await this.SeedResource("InventoryEntity", data.Inventory);
await this.SeedResource("WishlistEntity", data.Wishlist); 
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

