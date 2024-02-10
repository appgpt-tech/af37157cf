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
    let data: any = {"Users":[{"userId":"userId 1","email":"email 1","name":"name 1","id":68},{"userId":"userId 2","email":"email 2","name":"name 2","id":22},{"userId":"userId 3","email":"email 3","name":"name 3","id":63},{"userId":"userId 4","email":"email 4","name":"name 4","id":98},{"userId":"userId 5","email":"email 5","name":"name 5","id":68}],"Cards":[{"cardId":"cardId 1","setid":1,"cardName":"cardName 1","serial":"serial 1","type":"type 1","rarity":"rarity 1","condition":"condition 1","imageurl":"imageurl 1","id":69},{"cardId":"cardId 2","setid":2,"cardName":"cardName 2","serial":"serial 2","type":"type 2","rarity":"rarity 2","condition":"condition 2","imageurl":"imageurl 2","id":1},{"cardId":"cardId 3","setid":3,"cardName":"cardName 3","serial":"serial 3","type":"type 3","rarity":"rarity 3","condition":"condition 3","imageurl":"imageurl 3","id":33},{"cardId":"cardId 4","setid":4,"cardName":"cardName 4","serial":"serial 4","type":"type 4","rarity":"rarity 4","condition":"condition 4","imageurl":"imageurl 4","id":79},{"cardId":"cardId 5","setid":5,"cardName":"cardName 5","serial":"serial 5","type":"type 5","rarity":"rarity 5","condition":"condition 5","imageurl":"imageurl 5","id":72}],"Sets":[{"setId":"setId 1","setname":"setname 1","releasedate":"2024-12-24T14:25:05.204Z","totalcards":1,"id":63},{"setId":"setId 2","setname":"setname 2","releasedate":"2023-02-14T11:59:58.366Z","totalcards":2,"id":68},{"setId":"setId 3","setname":"setname 3","releasedate":"2024-02-04T06:27:45.854Z","totalcards":3,"id":6},{"setId":"setId 4","setname":"setname 4","releasedate":"2024-07-18T10:19:45.675Z","totalcards":4,"id":40},{"setId":"setId 5","setname":"setname 5","releasedate":"2023-05-02T02:12:36.313Z","totalcards":5,"id":10}],"Inventory":[{"userId":1,"cardId":1,"recordedDate":"2024-11-15T23:37:30.709Z","id":28},{"userId":2,"cardId":2,"recordedDate":"2023-06-03T09:47:52.968Z","id":75},{"userId":3,"cardId":3,"recordedDate":"2023-10-08T21:14:31.043Z","id":4},{"userId":4,"cardId":4,"recordedDate":"2023-08-16T21:00:41.170Z","id":3},{"userId":5,"cardId":5,"recordedDate":"2024-05-28T09:26:24.208Z","id":23}],"Wishlist":[{"userId":1,"cardId":1,"insertedDate":"2024-11-12T22:56:52.845Z","id":69},{"userId":2,"cardId":2,"insertedDate":"2024-04-13T19:21:59.901Z","id":87},{"userId":3,"cardId":3,"insertedDate":"2023-05-10T16:10:57.788Z","id":37},{"userId":4,"cardId":4,"insertedDate":"2023-02-20T14:40:03.122Z","id":27},{"userId":5,"cardId":5,"insertedDate":"2024-12-10T17:08:41.923Z","id":96}]};
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

