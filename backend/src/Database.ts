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
        { userName: "userName 1", email: "email 1", id: 1 },
        { userName: "userName 2", email: "email 2", id: 40 },
        { userName: "userName 3", email: "email 3", id: 52 },
        { userName: "userName 4", email: "email 4", id: 15 },
        { userName: "userName 5", email: "email 5", id: 7 },
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
          id: 7,
        },
        {
          cardName: "cardName 2",
          serial: "serial 2",
          type: "type 2",
          rarity: "rarity 2",
          condition: "condition 2",
          imageUrl: "imageUrl 2",
          set: 2,
          id: 99,
        },
        {
          cardName: "cardName 3",
          serial: "serial 3",
          type: "type 3",
          rarity: "rarity 3",
          condition: "condition 3",
          imageUrl: "imageUrl 3",
          set: 3,
          id: 72,
        },
        {
          cardName: "cardName 4",
          serial: "serial 4",
          type: "type 4",
          rarity: "rarity 4",
          condition: "condition 4",
          imageUrl: "imageUrl 4",
          set: 4,
          id: 16,
        },
        {
          cardName: "cardName 5",
          serial: "serial 5",
          type: "type 5",
          rarity: "rarity 5",
          condition: "condition 5",
          imageUrl: "imageUrl 5",
          set: 5,
          id: 88,
        },
      ],
      Sets: [
        {
          setName: "setName 1",
          releaseDate: "2023-04-09T05:55:35.829Z",
          totalCards: 1,
          id: 61,
        },
        {
          setName: "setName 2",
          releaseDate: "2023-07-28T11:13:01.827Z",
          totalCards: 2,
          id: 74,
        },
        {
          setName: "setName 3",
          releaseDate: "2024-05-06T01:56:04.194Z",
          totalCards: 3,
          id: 6,
        },
        {
          setName: "setName 4",
          releaseDate: "2023-10-21T09:38:29.055Z",
          totalCards: 4,
          id: 63,
        },
        {
          setName: "setName 5",
          releaseDate: "2023-12-29T02:46:45.375Z",
          totalCards: 5,
          id: 95,
        },
      ],
      Inventory: [
        { user: 1, card: 1, dateAdded: "2024-04-23T12:34:21.088Z", id: 97 },
        { user: 2, card: 2, dateAdded: "2024-09-16T14:55:52.565Z", id: 98 },
        { user: 3, card: 3, dateAdded: "2023-09-20T01:05:17.661Z", id: 35 },
        { user: 4, card: 4, dateAdded: "2024-07-24T14:32:33.877Z", id: 79 },
        { user: 5, card: 5, dateAdded: "2024-02-16T23:07:36.472Z", id: 46 },
      ],
      Wishlist: [
        { user: 1, card: 1, insertedDate: "2024-03-31T11:31:15.880Z", id: 14 },
        { user: 2, card: 2, insertedDate: "2023-06-07T19:20:27.741Z", id: 64 },
        { user: 3, card: 3, insertedDate: "2023-04-09T19:14:07.702Z", id: 13 },
        { user: 4, card: 4, insertedDate: "2023-03-24T16:22:18.333Z", id: 32 },
        { user: 5, card: 5, insertedDate: "2024-06-04T00:52:32.001Z", id: 95 },
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
