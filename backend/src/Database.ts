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
    let data: any = {"Users":[{"userId":"userId 1","email":"email 1","name":"name 1","id":54},{"userId":"userId 2","email":"email 2","name":"name 2","id":97},{"userId":"userId 3","email":"email 3","name":"name 3","id":54},{"userId":"userId 4","email":"email 4","name":"name 4","id":86},{"userId":"userId 5","email":"email 5","name":"name 5","id":79}],"Cards":[{"cardId":"cardId 1","setid":1,"cardName":"cardName 1","serial":"serial 1","type":"type 1","rarity":"rarity 1","condition":"condition 1","imageurl":"imageurl 1","id":14},{"cardId":"cardId 2","setid":2,"cardName":"cardName 2","serial":"serial 2","type":"type 2","rarity":"rarity 2","condition":"condition 2","imageurl":"imageurl 2","id":2},{"cardId":"cardId 3","setid":3,"cardName":"cardName 3","serial":"serial 3","type":"type 3","rarity":"rarity 3","condition":"condition 3","imageurl":"imageurl 3","id":14},{"cardId":"cardId 4","setid":4,"cardName":"cardName 4","serial":"serial 4","type":"type 4","rarity":"rarity 4","condition":"condition 4","imageurl":"imageurl 4","id":95},{"cardId":"cardId 5","setid":5,"cardName":"cardName 5","serial":"serial 5","type":"type 5","rarity":"rarity 5","condition":"condition 5","imageurl":"imageurl 5","id":6}],"Sets":[{"setId":"setId 1","setname":"setname 1","releasedate":"2024-03-07T16:11:42.645Z","totalcards":1,"id":45},{"setId":"setId 2","setname":"setname 2","releasedate":"2023-10-04T05:29:15.032Z","totalcards":2,"id":98},{"setId":"setId 3","setname":"setname 3","releasedate":"2024-12-03T17:33:11.215Z","totalcards":3,"id":94},{"setId":"setId 4","setname":"setname 4","releasedate":"2024-08-17T07:43:49.511Z","totalcards":4,"id":51},{"setId":"setId 5","setname":"setname 5","releasedate":"2024-12-02T02:32:55.413Z","totalcards":5,"id":40}],"Inventory":[{"userId":1,"cardId":1,"recordedDate":"2024-11-02T18:59:18.183Z","id":12},{"userId":2,"cardId":2,"recordedDate":"2024-12-05T22:40:03.597Z","id":25},{"userId":3,"cardId":3,"recordedDate":"2023-03-02T17:48:48.605Z","id":81},{"userId":4,"cardId":4,"recordedDate":"2024-04-23T22:06:36.346Z","id":60},{"userId":5,"cardId":5,"recordedDate":"2024-07-01T12:07:12.562Z","id":71}],"Wishlist":[{"userId":1,"cardId":1,"insertedDate":"2023-07-15T20:28:01.760Z","id":13},{"userId":2,"cardId":2,"insertedDate":"2024-08-22T23:44:33.776Z","id":86},{"userId":3,"cardId":3,"insertedDate":"2023-11-28T21:16:46.183Z","id":51},{"userId":4,"cardId":4,"insertedDate":"2024-05-05T13:43:29.122Z","id":5},{"userId":5,"cardId":5,"insertedDate":"2024-11-25T11:30:13.762Z","id":12}]};
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

