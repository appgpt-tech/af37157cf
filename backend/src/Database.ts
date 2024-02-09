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
    let data: any = {"Users":[{"userId":"userId 1","email":"email 1","name":"name 1","id":65},{"userId":"userId 2","email":"email 2","name":"name 2","id":77},{"userId":"userId 3","email":"email 3","name":"name 3","id":0},{"userId":"userId 4","email":"email 4","name":"name 4","id":38},{"userId":"userId 5","email":"email 5","name":"name 5","id":85}],"Cards":[{"cardId":"cardId 1","setid":1,"cardName":"cardName 1","serial":"serial 1","type":"type 1","rarity":"rarity 1","condition":"condition 1","imageurl":"imageurl 1","id":40},{"cardId":"cardId 2","setid":2,"cardName":"cardName 2","serial":"serial 2","type":"type 2","rarity":"rarity 2","condition":"condition 2","imageurl":"imageurl 2","id":12},{"cardId":"cardId 3","setid":3,"cardName":"cardName 3","serial":"serial 3","type":"type 3","rarity":"rarity 3","condition":"condition 3","imageurl":"imageurl 3","id":15},{"cardId":"cardId 4","setid":4,"cardName":"cardName 4","serial":"serial 4","type":"type 4","rarity":"rarity 4","condition":"condition 4","imageurl":"imageurl 4","id":82},{"cardId":"cardId 5","setid":5,"cardName":"cardName 5","serial":"serial 5","type":"type 5","rarity":"rarity 5","condition":"condition 5","imageurl":"imageurl 5","id":44}],"Sets":[{"setId":"setId 1","setname":"setname 1","releasedate":"2024-05-24T21:33:29.112Z","totalcards":1,"id":8},{"setId":"setId 2","setname":"setname 2","releasedate":"2024-06-10T17:18:15.622Z","totalcards":2,"id":18},{"setId":"setId 3","setname":"setname 3","releasedate":"2023-12-10T23:34:20.539Z","totalcards":3,"id":30},{"setId":"setId 4","setname":"setname 4","releasedate":"2024-03-18T10:15:37.356Z","totalcards":4,"id":90},{"setId":"setId 5","setname":"setname 5","releasedate":"2024-05-14T20:40:43.452Z","totalcards":5,"id":56}],"Inventory":[{"userId":1,"cardId":1,"recordedDate":"2024-06-14T08:04:16.670Z","id":91},{"userId":2,"cardId":2,"recordedDate":"2024-02-18T02:33:13.152Z","id":30},{"userId":3,"cardId":3,"recordedDate":"2024-08-26T23:00:29.307Z","id":64},{"userId":4,"cardId":4,"recordedDate":"2023-05-31T05:27:32.653Z","id":1},{"userId":5,"cardId":5,"recordedDate":"2024-01-18T20:15:36.891Z","id":51}],"Wishlist":[{"userId":1,"cardId":1,"insertedDate":"2023-09-24T07:52:00.048Z","id":34},{"userId":2,"cardId":2,"insertedDate":"2023-05-12T06:20:02.519Z","id":46},{"userId":3,"cardId":3,"insertedDate":"2023-06-30T17:10:08.430Z","id":59},{"userId":4,"cardId":4,"insertedDate":"2024-12-30T02:21:31.578Z","id":5},{"userId":5,"cardId":5,"insertedDate":"2024-10-26T00:08:31.666Z","id":50}]};
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

