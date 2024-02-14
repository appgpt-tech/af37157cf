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
    let data: any = {"Users":[{"userName":"userName 1","email":"email 1","id":46},{"userName":"userName 2","email":"email 2","id":5},{"userName":"userName 3","email":"email 3","id":61},{"userName":"userName 4","email":"email 4","id":55},{"userName":"userName 5","email":"email 5","id":92}],"Cards":[{"cardName":"cardName 1","serial":"serial 1","type":"type 1","rarity":"rarity 1","condition":"condition 1","imageUrl":"imageUrl 1","set":1,"id":100},{"cardName":"cardName 2","serial":"serial 2","type":"type 2","rarity":"rarity 2","condition":"condition 2","imageUrl":"imageUrl 2","set":2,"id":70},{"cardName":"cardName 3","serial":"serial 3","type":"type 3","rarity":"rarity 3","condition":"condition 3","imageUrl":"imageUrl 3","set":3,"id":49},{"cardName":"cardName 4","serial":"serial 4","type":"type 4","rarity":"rarity 4","condition":"condition 4","imageUrl":"imageUrl 4","set":4,"id":97},{"cardName":"cardName 5","serial":"serial 5","type":"type 5","rarity":"rarity 5","condition":"condition 5","imageUrl":"imageUrl 5","set":5,"id":9}],"Sets":[{"setName":"setName 1","releaseDate":"2023-09-07T20:09:59.036Z","totalCards":1,"id":41},{"setName":"setName 2","releaseDate":"2023-11-02T14:39:30.572Z","totalCards":2,"id":79},{"setName":"setName 3","releaseDate":"2024-08-11T23:05:14.181Z","totalCards":3,"id":43},{"setName":"setName 4","releaseDate":"2024-06-20T08:01:46.327Z","totalCards":4,"id":71},{"setName":"setName 5","releaseDate":"2024-12-11T03:49:39.581Z","totalCards":5,"id":75}],"Inventory":[{"user":1,"card":1,"dateAdded":"2025-01-07T10:41:43.541Z","id":91},{"user":2,"card":2,"dateAdded":"2025-01-30T02:23:45.712Z","id":92},{"user":3,"card":3,"dateAdded":"2024-06-26T00:59:50.986Z","id":40},{"user":4,"card":4,"dateAdded":"2023-03-03T22:21:44.620Z","id":53},{"user":5,"card":5,"dateAdded":"2024-05-20T21:27:35.872Z","id":72}],"Wishlist":[{"user":1,"card":1,"dateInserted":"2024-08-14T19:27:13.954Z","id":6},{"user":2,"card":2,"dateInserted":"2025-02-01T13:16:33.859Z","id":28},{"user":3,"card":3,"dateInserted":"2023-10-10T23:52:02.091Z","id":88},{"user":4,"card":4,"dateInserted":"2024-06-18T11:56:54.983Z","id":72},{"user":5,"card":5,"dateInserted":"2023-09-07T13:34:09.759Z","id":44}]};
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

