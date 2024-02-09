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
    let data: any = {"Users":[{"userId":"userId 1","email":"email 1","name":"name 1","id":15},{"userId":"userId 2","email":"email 2","name":"name 2","id":57},{"userId":"userId 3","email":"email 3","name":"name 3","id":47},{"userId":"userId 4","email":"email 4","name":"name 4","id":75},{"userId":"userId 5","email":"email 5","name":"name 5","id":92}],"Cards":[{"cardId":"cardId 1","setid":1,"cardName":"cardName 1","serial":"serial 1","type":"type 1","rarity":"rarity 1","condition":"condition 1","imageurl":"imageurl 1","id":18},{"cardId":"cardId 2","setid":2,"cardName":"cardName 2","serial":"serial 2","type":"type 2","rarity":"rarity 2","condition":"condition 2","imageurl":"imageurl 2","id":49},{"cardId":"cardId 3","setid":3,"cardName":"cardName 3","serial":"serial 3","type":"type 3","rarity":"rarity 3","condition":"condition 3","imageurl":"imageurl 3","id":9},{"cardId":"cardId 4","setid":4,"cardName":"cardName 4","serial":"serial 4","type":"type 4","rarity":"rarity 4","condition":"condition 4","imageurl":"imageurl 4","id":41},{"cardId":"cardId 5","setid":5,"cardName":"cardName 5","serial":"serial 5","type":"type 5","rarity":"rarity 5","condition":"condition 5","imageurl":"imageurl 5","id":46}],"Sets":[{"setId":"setId 1","setname":"setname 1","releasedate":"2024-07-15T02:16:11.777Z","totalcards":1,"id":9},{"setId":"setId 2","setname":"setname 2","releasedate":"2024-01-19T15:03:54.045Z","totalcards":2,"id":32},{"setId":"setId 3","setname":"setname 3","releasedate":"2023-07-24T22:11:40.727Z","totalcards":3,"id":24},{"setId":"setId 4","setname":"setname 4","releasedate":"2024-03-25T04:26:02.667Z","totalcards":4,"id":23},{"setId":"setId 5","setname":"setname 5","releasedate":"2024-04-27T21:45:34.377Z","totalcards":5,"id":7}],"Inventory":[{"userId":1,"cardId":1,"recordedDate":"2023-11-29T03:10:31.990Z","id":94},{"userId":2,"cardId":2,"recordedDate":"2023-08-01T02:13:41.130Z","id":17},{"userId":3,"cardId":3,"recordedDate":"2024-10-30T12:53:09.614Z","id":45},{"userId":4,"cardId":4,"recordedDate":"2024-03-25T15:01:57.892Z","id":8},{"userId":5,"cardId":5,"recordedDate":"2024-08-30T10:37:23.021Z","id":12}],"Wishlist":[{"userId":1,"cardId":1,"insertedDate":"2024-12-21T21:03:44.157Z","id":16},{"userId":2,"cardId":2,"insertedDate":"2024-02-25T17:08:54.868Z","id":43},{"userId":3,"cardId":3,"insertedDate":"2024-03-14T12:08:27.825Z","id":18},{"userId":4,"cardId":4,"insertedDate":"2024-03-11T15:08:09.115Z","id":66},{"userId":5,"cardId":5,"insertedDate":"2023-03-25T10:52:35.351Z","id":78}]};
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

