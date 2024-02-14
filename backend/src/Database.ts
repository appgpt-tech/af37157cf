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
    let data: any = {"Users":[{"userName":"userName 1","email":"email 1","id":100},{"userName":"userName 2","email":"email 2","id":42},{"userName":"userName 3","email":"email 3","id":16},{"userName":"userName 4","email":"email 4","id":93},{"userName":"userName 5","email":"email 5","id":39}],"Cards":[{"cardName":"cardName 1","serial":"serial 1","type":"type 1","rarity":"rarity 1","condition":"condition 1","imageUrl":"imageUrl 1","set":1,"id":13},{"cardName":"cardName 2","serial":"serial 2","type":"type 2","rarity":"rarity 2","condition":"condition 2","imageUrl":"imageUrl 2","set":2,"id":19},{"cardName":"cardName 3","serial":"serial 3","type":"type 3","rarity":"rarity 3","condition":"condition 3","imageUrl":"imageUrl 3","set":3,"id":30},{"cardName":"cardName 4","serial":"serial 4","type":"type 4","rarity":"rarity 4","condition":"condition 4","imageUrl":"imageUrl 4","set":4,"id":77},{"cardName":"cardName 5","serial":"serial 5","type":"type 5","rarity":"rarity 5","condition":"condition 5","imageUrl":"imageUrl 5","set":5,"id":56}],"Sets":[{"setName":"setName 1","releaseDate":"2024-02-10T21:56:02.076Z","totalCards":1,"id":34},{"setName":"setName 2","releaseDate":"2024-01-13T12:29:33.156Z","totalCards":2,"id":11},{"setName":"setName 3","releaseDate":"2023-03-10T11:17:19.492Z","totalCards":3,"id":89},{"setName":"setName 4","releaseDate":"2024-07-30T22:36:07.359Z","totalCards":4,"id":3},{"setName":"setName 5","releaseDate":"2023-09-19T15:45:11.831Z","totalCards":5,"id":29}],"Inventory":[{"user":1,"card":1,"dateAdded":"2023-05-28T16:08:01.615Z","id":68},{"user":2,"card":2,"dateAdded":"2023-11-03T20:53:23.537Z","id":27},{"user":3,"card":3,"dateAdded":"2024-03-02T22:45:11.141Z","id":18},{"user":4,"card":4,"dateAdded":"2025-02-13T10:00:26.307Z","id":44},{"user":5,"card":5,"dateAdded":"2023-12-27T10:10:16.241Z","id":24}],"Wishlist":[{"user":1,"card":1,"dateInserted":"2024-02-17T06:40:19.135Z","id":17},{"user":2,"card":2,"dateInserted":"2024-12-05T19:12:25.484Z","id":73},{"user":3,"card":3,"dateInserted":"2024-07-15T07:18:50.000Z","id":5},{"user":4,"card":4,"dateInserted":"2024-09-04T21:23:35.926Z","id":31},{"user":5,"card":5,"dateInserted":"2024-03-02T05:01:29.282Z","id":57}]};
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

