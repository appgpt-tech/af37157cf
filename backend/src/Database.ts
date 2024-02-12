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
    let data: any = {"Users":[{"userId":1,"email":"email 1","name":"name 1","id":64},{"userId":2,"email":"email 2","name":"name 2","id":51},{"userId":3,"email":"email 3","name":"name 3","id":64},{"userId":4,"email":"email 4","name":"name 4","id":47},{"userId":5,"email":"email 5","name":"name 5","id":37}],"Cards":[{"cardId":1,"setId":1,"cardName":"cardName 1","serial":"serial 1","type":"type 1","rarity":"rarity 1","condition":"condition 1","imageUrl":"imageUrl 1","id":74},{"cardId":2,"setId":2,"cardName":"cardName 2","serial":"serial 2","type":"type 2","rarity":"rarity 2","condition":"condition 2","imageUrl":"imageUrl 2","id":48},{"cardId":3,"setId":3,"cardName":"cardName 3","serial":"serial 3","type":"type 3","rarity":"rarity 3","condition":"condition 3","imageUrl":"imageUrl 3","id":83},{"cardId":4,"setId":4,"cardName":"cardName 4","serial":"serial 4","type":"type 4","rarity":"rarity 4","condition":"condition 4","imageUrl":"imageUrl 4","id":17},{"cardId":5,"setId":5,"cardName":"cardName 5","serial":"serial 5","type":"type 5","rarity":"rarity 5","condition":"condition 5","imageUrl":"imageUrl 5","id":97}],"Sets":[{"setId":1,"setName":"setName 1","releaseDate":"2024-05-23T21:55:09.216Z","totalCards":1,"id":95},{"setId":2,"setName":"setName 2","releaseDate":"2024-03-11T16:45:11.141Z","totalCards":2,"id":99},{"setId":3,"setName":"setName 3","releaseDate":"2023-04-29T11:51:16.640Z","totalCards":3,"id":19},{"setId":4,"setName":"setName 4","releaseDate":"2024-10-10T12:48:37.840Z","totalCards":4,"id":31},{"setId":5,"setName":"setName 5","releaseDate":"2024-07-09T11:13:44.964Z","totalCards":5,"id":54}],"Inventory":[{"userId":1,"cardId":1,"recordedDate":"2023-04-13T23:29:14.557Z","id":28},{"userId":2,"cardId":2,"recordedDate":"2025-01-23T20:52:56.565Z","id":63},{"userId":3,"cardId":3,"recordedDate":"2025-01-08T07:07:35.058Z","id":48},{"userId":4,"cardId":4,"recordedDate":"2025-01-04T06:34:29.918Z","id":76},{"userId":5,"cardId":5,"recordedDate":"2024-03-27T07:06:49.684Z","id":22}],"Wishlist":[{"userId":1,"cardId":1,"insertedDate":"2023-05-22T04:07:32.816Z","id":6},{"userId":2,"cardId":2,"insertedDate":"2024-10-15T06:32:12.663Z","id":23},{"userId":3,"cardId":3,"insertedDate":"2024-05-28T19:48:11.381Z","id":89},{"userId":4,"cardId":4,"insertedDate":"2024-02-21T11:01:54.755Z","id":32},{"userId":5,"cardId":5,"insertedDate":"2024-11-11T21:14:52.814Z","id":24}]};
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

