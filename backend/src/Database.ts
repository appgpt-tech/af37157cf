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
    let data: any = {"Users":[{"userId":"userId 1","email":"email 1","name":"name 1","id":90},{"userId":"userId 2","email":"email 2","name":"name 2","id":33},{"userId":"userId 3","email":"email 3","name":"name 3","id":47},{"userId":"userId 4","email":"email 4","name":"name 4","id":100},{"userId":"userId 5","email":"email 5","name":"name 5","id":97}],"Cards":[{"cardId":"cardId 1","setid":"setid 1","cardName":"cardName 1","serial":"serial 1","type":"type 1","rarity":"rarity 1","condition":"condition 1","imageurl":"imageurl 1","id":3},{"cardId":"cardId 2","setid":"setid 2","cardName":"cardName 2","serial":"serial 2","type":"type 2","rarity":"rarity 2","condition":"condition 2","imageurl":"imageurl 2","id":86},{"cardId":"cardId 3","setid":"setid 3","cardName":"cardName 3","serial":"serial 3","type":"type 3","rarity":"rarity 3","condition":"condition 3","imageurl":"imageurl 3","id":27},{"cardId":"cardId 4","setid":"setid 4","cardName":"cardName 4","serial":"serial 4","type":"type 4","rarity":"rarity 4","condition":"condition 4","imageurl":"imageurl 4","id":96},{"cardId":"cardId 5","setid":"setid 5","cardName":"cardName 5","serial":"serial 5","type":"type 5","rarity":"rarity 5","condition":"condition 5","imageurl":"imageurl 5","id":39}],"Sets":[{"setId":"setId 1","setname":"setname 1","releasedate":"2023-02-21T13:13:22.863Z","totalcards":1,"id":92},{"setId":"setId 2","setname":"setname 2","releasedate":"2024-06-06T08:30:07.959Z","totalcards":2,"id":59},{"setId":"setId 3","setname":"setname 3","releasedate":"2023-06-14T09:44:44.769Z","totalcards":3,"id":55},{"setId":"setId 4","setname":"setname 4","releasedate":"2023-12-29T10:51:12.183Z","totalcards":4,"id":36},{"setId":"setId 5","setname":"setname 5","releasedate":"2023-03-31T18:23:07.744Z","totalcards":5,"id":35}],"Inventory":[{"userId":"userId 1","cardId":"cardId 1","recordedDate":"2023-05-21T17:05:40.590Z","id":79},{"userId":"userId 2","cardId":"cardId 2","recordedDate":"2023-07-31T12:47:10.224Z","id":89},{"userId":"userId 3","cardId":"cardId 3","recordedDate":"2025-01-22T10:19:47.940Z","id":49},{"userId":"userId 4","cardId":"cardId 4","recordedDate":"2023-08-15T20:15:10.766Z","id":69},{"userId":"userId 5","cardId":"cardId 5","recordedDate":"2023-08-23T01:54:20.476Z","id":54}],"Wishlist":[{"userId":"userId 1","cardId":"cardId 1","insertedDate":"2023-12-01T18:09:22.928Z","id":65},{"userId":"userId 2","cardId":"cardId 2","insertedDate":"2024-11-15T01:40:13.071Z","id":69},{"userId":"userId 3","cardId":"cardId 3","insertedDate":"2025-01-10T23:37:19.845Z","id":94},{"userId":"userId 4","cardId":"cardId 4","insertedDate":"2023-11-07T17:17:29.883Z","id":80},{"userId":"userId 5","cardId":"cardId 5","insertedDate":"2024-03-19T02:40:46.491Z","id":4}]};
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

