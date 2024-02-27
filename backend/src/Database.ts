// Source code generated by AppGPT (www.appgpt.tech)

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

    dbConfig.entities = [
      SettingsEntity,
      UsersEntity,
      CardsEntity,
      SetsEntity,
      InventoryEntity,
      WishlistEntity,
    ];
    Database.ds = new DataSource(dbConfig);
    await Database.ds.initialize();

    //TODO: Drop all tables

    await Database.Seed();
  }
  static async Seed() {
    let data: any = {
      Users: [
        { userName: "userName 1", email: "email 1", id: 93 },
        { userName: "userName 2", email: "email 2", id: 96 },
        { userName: "userName 3", email: "email 3", id: 28 },
        { userName: "userName 4", email: "email 4", id: 9 },
        { userName: "userName 5", email: "email 5", id: 73 },
      ],
      Cards: [
        {
          cardName: "cardName 1",
          serial: "serial 1",
          type: "type 1",
          rarity: "rarity 1",
          condition: "condition 1",
          imageUrl: "imageUrl 1",
          set: 1,
          id: 40,
        },
        {
          cardName: "cardName 2",
          serial: "serial 2",
          type: "type 2",
          rarity: "rarity 2",
          condition: "condition 2",
          imageUrl: "imageUrl 2",
          set: 2,
          id: 49,
        },
        {
          cardName: "cardName 3",
          serial: "serial 3",
          type: "type 3",
          rarity: "rarity 3",
          condition: "condition 3",
          imageUrl: "imageUrl 3",
          set: 3,
          id: 48,
        },
        {
          cardName: "cardName 4",
          serial: "serial 4",
          type: "type 4",
          rarity: "rarity 4",
          condition: "condition 4",
          imageUrl: "imageUrl 4",
          set: 4,
          id: 64,
        },
        {
          cardName: "cardName 5",
          serial: "serial 5",
          type: "type 5",
          rarity: "rarity 5",
          condition: "condition 5",
          imageUrl: "imageUrl 5",
          set: 5,
          id: 60,
        },
      ],
      Sets: [
        {
          setName: "setName 1",
          releaseDate: "2023-05-11T17:33:10.836Z",
          totalCards: 1,
          id: 30,
        },
        {
          setName: "setName 2",
          releaseDate: "2024-03-11T19:03:12.273Z",
          totalCards: 2,
          id: 53,
        },
        {
          setName: "setName 3",
          releaseDate: "2024-03-03T08:26:59.159Z",
          totalCards: 3,
          id: 76,
        },
        {
          setName: "setName 4",
          releaseDate: "2023-05-28T23:04:46.960Z",
          totalCards: 4,
          id: 8,
        },
        {
          setName: "setName 5",
          releaseDate: "2024-12-23T21:32:32.293Z",
          totalCards: 5,
          id: 55,
        },
      ],
      Inventory: [
        { user: 1, card: 1, dateAdded: "2024-09-23T02:46:44.468Z", id: 25 },
        { user: 2, card: 2, dateAdded: "2024-02-26T16:42:21.865Z", id: 70 },
        { user: 3, card: 3, dateAdded: "2024-05-06T23:39:29.655Z", id: 15 },
        { user: 4, card: 4, dateAdded: "2024-07-03T14:50:17.883Z", id: 25 },
        { user: 5, card: 5, dateAdded: "2024-02-06T22:34:55.477Z", id: 39 },
      ],
      Wishlist: [
        { user: 1, card: 1, dateInserted: "2024-07-20T17:17:59.070Z", id: 39 },
        { user: 2, card: 2, dateInserted: "2024-08-06T23:12:33.728Z", id: 50 },
        { user: 3, card: 3, dateInserted: "2023-06-05T04:57:49.638Z", id: 14 },
        { user: 4, card: 4, dateInserted: "2024-08-06T15:09:34.031Z", id: 50 },
        { user: 5, card: 5, dateInserted: "2023-04-08T14:50:42.310Z", id: 13 },
      ],
    };
    //Autogenerate multiple such calls ie for each resource and its data object
    let isSeeded = await this.IsSeeded();
    //if (!isSeeded) {
    //forcing app recreation
    if (true) {
      console.log("   Seeding database...");
      await this.SeedResource("UsersEntity", data.Users);
      await this.SeedResource("CardsEntity", data.Cards);
      await this.SeedResource("SetsEntity", data.Sets);
      await this.SeedResource("InventoryEntity", data.Inventory);
      await this.SeedResource("WishlistEntity", data.Wishlist);
      await this.SeedResource("SettingsEntity", {
        settingname: "isSeeded",
        settingvalue: "true",
      });
    } else {
      console.log("   Database seeded already!");
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
    console.log("   Seeding table " + resourceName);
    await repo.upsert(resourceData, ["id"]);
  }
}
