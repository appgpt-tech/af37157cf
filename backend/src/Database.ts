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
    let data: any = {"Users":[{"userId":1,"email":"email 1","name":"name 1","id":54},{"userId":2,"email":"email 2","name":"name 2","id":68},{"userId":3,"email":"email 3","name":"name 3","id":15},{"userId":4,"email":"email 4","name":"name 4","id":88},{"userId":5,"email":"email 5","name":"name 5","id":94}],"Cards":[{"cardId":1,"setId":1,"cardName":"cardName 1","serial":"serial 1","type":"type 1","rarity":"rarity 1","condition":"condition 1","imageUrl":"imageUrl 1","id":44},{"cardId":2,"setId":2,"cardName":"cardName 2","serial":"serial 2","type":"type 2","rarity":"rarity 2","condition":"condition 2","imageUrl":"imageUrl 2","id":50},{"cardId":3,"setId":3,"cardName":"cardName 3","serial":"serial 3","type":"type 3","rarity":"rarity 3","condition":"condition 3","imageUrl":"imageUrl 3","id":55},{"cardId":4,"setId":4,"cardName":"cardName 4","serial":"serial 4","type":"type 4","rarity":"rarity 4","condition":"condition 4","imageUrl":"imageUrl 4","id":90},{"cardId":5,"setId":5,"cardName":"cardName 5","serial":"serial 5","type":"type 5","rarity":"rarity 5","condition":"condition 5","imageUrl":"imageUrl 5","id":49}],"Sets":[{"setId":1,"setName":"setName 1","releaseDate":"2024-04-12T11:09:26.128Z","totalCards":1,"id":26},{"setId":2,"setName":"setName 2","releaseDate":"2023-12-13T16:41:38.120Z","totalCards":2,"id":53},{"setId":3,"setName":"setName 3","releaseDate":"2024-09-02T13:35:09.021Z","totalCards":3,"id":85},{"setId":4,"setName":"setName 4","releaseDate":"2023-06-25T06:22:41.737Z","totalCards":4,"id":77},{"setId":5,"setName":"setName 5","releaseDate":"2024-07-21T17:05:28.514Z","totalCards":5,"id":41}],"Inventory":[{"userId":1,"cardId":1,"recordedDate":"2025-02-08T08:54:38.315Z","id":48},{"userId":2,"cardId":2,"recordedDate":"2024-08-27T19:42:00.952Z","id":20},{"userId":3,"cardId":3,"recordedDate":"2024-11-17T18:55:06.095Z","id":92},{"userId":4,"cardId":4,"recordedDate":"2023-11-22T18:38:05.299Z","id":31},{"userId":5,"cardId":5,"recordedDate":"2023-08-12T11:24:50.010Z","id":77}],"Wishlist":[{"userId":1,"cardId":1,"insertedDate":"2024-01-25T15:30:18.806Z","id":66},{"userId":2,"cardId":2,"insertedDate":"2023-10-26T16:40:15.656Z","id":35},{"userId":3,"cardId":3,"insertedDate":"2023-11-17T03:55:42.820Z","id":94},{"userId":4,"cardId":4,"insertedDate":"2024-09-28T14:18:20.546Z","id":68},{"userId":5,"cardId":5,"insertedDate":"2024-01-29T11:34:15.644Z","id":84}]};
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

