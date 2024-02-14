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
    let data: any = {"Users":[{"userName":"userName 1","email":"email 1","id":56},{"userName":"userName 2","email":"email 2","id":15},{"userName":"userName 3","email":"email 3","id":73},{"userName":"userName 4","email":"email 4","id":32},{"userName":"userName 5","email":"email 5","id":95}],"Cards":[{"cardName":"cardName 1","serial":"serial 1","type":"type 1","rarity":"rarity 1","condition":"condition 1","imageUrl":"imageUrl 1","set":1,"id":3},{"cardName":"cardName 2","serial":"serial 2","type":"type 2","rarity":"rarity 2","condition":"condition 2","imageUrl":"imageUrl 2","set":2,"id":92},{"cardName":"cardName 3","serial":"serial 3","type":"type 3","rarity":"rarity 3","condition":"condition 3","imageUrl":"imageUrl 3","set":3,"id":64},{"cardName":"cardName 4","serial":"serial 4","type":"type 4","rarity":"rarity 4","condition":"condition 4","imageUrl":"imageUrl 4","set":4,"id":9},{"cardName":"cardName 5","serial":"serial 5","type":"type 5","rarity":"rarity 5","condition":"condition 5","imageUrl":"imageUrl 5","set":5,"id":32}],"Sets":[{"setName":"setName 1","releaseDate":"2025-02-02T02:32:50.954Z","totalCards":1,"id":58},{"setName":"setName 2","releaseDate":"2023-10-06T03:10:50.687Z","totalCards":2,"id":2},{"setName":"setName 3","releaseDate":"2025-01-22T22:34:49.149Z","totalCards":3,"id":8},{"setName":"setName 4","releaseDate":"2024-09-20T08:25:19.017Z","totalCards":4,"id":97},{"setName":"setName 5","releaseDate":"2024-09-30T23:20:11.680Z","totalCards":5,"id":49}],"Inventory":[{"user":1,"card":1,"dateAdded":"2024-09-15T18:40:35.423Z","id":97},{"user":2,"card":2,"dateAdded":"2024-06-29T15:40:57.207Z","id":81},{"user":3,"card":3,"dateAdded":"2023-02-17T22:34:03.079Z","id":91},{"user":4,"card":4,"dateAdded":"2025-01-26T18:58:42.558Z","id":65},{"user":5,"card":5,"dateAdded":"2024-09-29T13:11:59.306Z","id":70}],"Wishlist":[{"user":1,"card":1,"dateInserted":"2024-03-27T17:59:01.881Z","id":95},{"user":2,"card":2,"dateInserted":"2024-08-01T20:37:17.614Z","id":41},{"user":3,"card":3,"dateInserted":"2023-07-07T19:11:04.509Z","id":36},{"user":4,"card":4,"dateInserted":"2023-05-22T16:53:21.306Z","id":82},{"user":5,"card":5,"dateInserted":"2023-11-28T17:49:21.633Z","id":59}]};
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

