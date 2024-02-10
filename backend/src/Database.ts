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
    let data: any = {"Users":[{"userId":"userId 1","email":"email 1","name":"name 1","id":3},{"userId":"userId 2","email":"email 2","name":"name 2","id":71},{"userId":"userId 3","email":"email 3","name":"name 3","id":47},{"userId":"userId 4","email":"email 4","name":"name 4","id":62},{"userId":"userId 5","email":"email 5","name":"name 5","id":45}],"Cards":[{"cardId":"cardId 1","setid":"setid 1","cardName":"cardName 1","serial":"serial 1","type":"type 1","rarity":"rarity 1","condition":"condition 1","imageurl":"imageurl 1","id":21},{"cardId":"cardId 2","setid":"setid 2","cardName":"cardName 2","serial":"serial 2","type":"type 2","rarity":"rarity 2","condition":"condition 2","imageurl":"imageurl 2","id":56},{"cardId":"cardId 3","setid":"setid 3","cardName":"cardName 3","serial":"serial 3","type":"type 3","rarity":"rarity 3","condition":"condition 3","imageurl":"imageurl 3","id":73},{"cardId":"cardId 4","setid":"setid 4","cardName":"cardName 4","serial":"serial 4","type":"type 4","rarity":"rarity 4","condition":"condition 4","imageurl":"imageurl 4","id":79},{"cardId":"cardId 5","setid":"setid 5","cardName":"cardName 5","serial":"serial 5","type":"type 5","rarity":"rarity 5","condition":"condition 5","imageurl":"imageurl 5","id":70}],"Sets":[{"setId":"setId 1","setname":"setname 1","releasedate":"2023-03-12T05:47:34.315Z","totalcards":1,"id":96},{"setId":"setId 2","setname":"setname 2","releasedate":"2023-12-02T02:22:49.374Z","totalcards":2,"id":44},{"setId":"setId 3","setname":"setname 3","releasedate":"2025-01-16T07:50:53.454Z","totalcards":3,"id":97},{"setId":"setId 4","setname":"setname 4","releasedate":"2024-12-12T14:28:53.496Z","totalcards":4,"id":56},{"setId":"setId 5","setname":"setname 5","releasedate":"2023-09-14T07:00:20.255Z","totalcards":5,"id":88}],"Inventory":[{"userId":"userId 1","cardId":"cardId 1","recordedDate":"2024-07-29T16:35:39.344Z","id":32},{"userId":"userId 2","cardId":"cardId 2","recordedDate":"2024-11-14T08:39:16.920Z","id":2},{"userId":"userId 3","cardId":"cardId 3","recordedDate":"2024-12-05T22:59:46.515Z","id":27},{"userId":"userId 4","cardId":"cardId 4","recordedDate":"2024-11-13T05:56:34.869Z","id":8},{"userId":"userId 5","cardId":"cardId 5","recordedDate":"2024-09-17T23:48:50.140Z","id":46}],"Wishlist":[{"userId":"userId 1","cardId":"cardId 1","insertedDate":"2024-08-29T02:41:55.751Z","id":20},{"userId":"userId 2","cardId":"cardId 2","insertedDate":"2023-04-27T20:40:22.395Z","id":24},{"userId":"userId 3","cardId":"cardId 3","insertedDate":"2023-08-23T03:39:55.838Z","id":68},{"userId":"userId 4","cardId":"cardId 4","insertedDate":"2023-04-06T05:40:51.615Z","id":93},{"userId":"userId 5","cardId":"cardId 5","insertedDate":"2024-06-23T21:33:21.885Z","id":28}]};
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

