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
    let data: any = {"Users":[{"userId":"userId 1","email":"email 1","name":"name 1","id":88},{"userId":"userId 2","email":"email 2","name":"name 2","id":100},{"userId":"userId 3","email":"email 3","name":"name 3","id":90},{"userId":"userId 4","email":"email 4","name":"name 4","id":69},{"userId":"userId 5","email":"email 5","name":"name 5","id":52}],"Cards":[{"cardId":"cardId 1","setid":1,"cardName":"cardName 1","serial":"serial 1","type":"type 1","rarity":"rarity 1","condition":"condition 1","imageurl":"imageurl 1","id":46},{"cardId":"cardId 2","setid":2,"cardName":"cardName 2","serial":"serial 2","type":"type 2","rarity":"rarity 2","condition":"condition 2","imageurl":"imageurl 2","id":65},{"cardId":"cardId 3","setid":3,"cardName":"cardName 3","serial":"serial 3","type":"type 3","rarity":"rarity 3","condition":"condition 3","imageurl":"imageurl 3","id":48},{"cardId":"cardId 4","setid":4,"cardName":"cardName 4","serial":"serial 4","type":"type 4","rarity":"rarity 4","condition":"condition 4","imageurl":"imageurl 4","id":13},{"cardId":"cardId 5","setid":5,"cardName":"cardName 5","serial":"serial 5","type":"type 5","rarity":"rarity 5","condition":"condition 5","imageurl":"imageurl 5","id":48}],"Sets":[{"setId":"setId 1","setname":"setname 1","releasedate":"2023-06-20T17:34:41.065Z","totalcards":1,"id":79},{"setId":"setId 2","setname":"setname 2","releasedate":"2024-04-18T00:55:21.757Z","totalcards":2,"id":31},{"setId":"setId 3","setname":"setname 3","releasedate":"2023-08-15T22:12:21.698Z","totalcards":3,"id":35},{"setId":"setId 4","setname":"setname 4","releasedate":"2024-04-24T11:55:54.623Z","totalcards":4,"id":49},{"setId":"setId 5","setname":"setname 5","releasedate":"2023-11-10T22:40:37.219Z","totalcards":5,"id":99}],"Inventory":[{"userId":1,"cardId":1,"recordedDate":"2024-07-17T18:20:33.398Z","id":84},{"userId":2,"cardId":2,"recordedDate":"2024-12-03T22:16:51.940Z","id":79},{"userId":3,"cardId":3,"recordedDate":"2024-02-13T04:44:27.592Z","id":73},{"userId":4,"cardId":4,"recordedDate":"2023-06-30T13:38:21.559Z","id":32},{"userId":5,"cardId":5,"recordedDate":"2024-01-04T08:19:06.563Z","id":99}],"Wishlist":[{"userId":1,"cardId":1,"insertedDate":"2023-08-07T03:59:32.854Z","id":36},{"userId":2,"cardId":2,"insertedDate":"2023-12-12T05:42:04.614Z","id":75},{"userId":3,"cardId":3,"insertedDate":"2023-11-17T13:57:00.197Z","id":89},{"userId":4,"cardId":4,"insertedDate":"2024-10-06T00:29:02.800Z","id":48},{"userId":5,"cardId":5,"insertedDate":"2025-01-27T23:55:13.670Z","id":97}]};
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

