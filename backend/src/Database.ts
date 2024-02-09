//Class to create tables and seed new database
import { DataSource } from "typeorm";
import { DBConfiguration } from "./Configuration";
import { SettingsEntity } from "./db/Settings.entity";
//autogenerate imports based on resources
import { UsersEntity } from "./db/Users.entity";
import { VendorsEntity } from "./db/Vendors.entity";
import { CustomersEntity } from "./db/Customers.entity";
import { InventoryEntity } from "./db/Inventory.entity";
import { ProductsEntity } from "./db/Products.entity";
import { ProductCategoriesEntity } from "./db/ProductCategories.entity";
import { DiscountsEntity } from "./db/Discounts.entity";
import { ShoppingCartEntity } from "./db/ShoppingCart.entity";
import { OrdersEntity } from "./db/Orders.entity";
import { OrderDetailsEntity } from "./db/OrderDetails.entity";
import { PaymentsEntity } from "./db/Payments.entity";
import { ReviewsEntity } from "./db/Reviews.entity";
import { SupportTicketsEntity } from "./db/SupportTickets.entity";

export class Database {
  static dbConfiguration: DBConfiguration;
  public static ds: DataSource;

  static async Initialize(dbConfiguration: DBConfiguration) {
    Database.dbConfiguration = dbConfiguration;
    let dbConfig: any = dbConfiguration as any;
    //Autogenerate entities array from resource names

    dbConfig.entities = [SettingsEntity, UsersEntity, VendorsEntity, CustomersEntity, InventoryEntity, ProductsEntity, ProductCategoriesEntity, DiscountsEntity, ShoppingCartEntity, OrdersEntity, OrderDetailsEntity, PaymentsEntity, ReviewsEntity, SupportTicketsEntity];
    Database.ds = new DataSource(dbConfig);
    await Database.ds.initialize();

    //TODO: Drop all tables


    await Database.Seed();
  }
  static async Seed() {
    let data: any = {"Users":[{"userId":"userId 1","name":"name 1","email":"email 1","password":"password 1","role":"role 1","id":61},{"userId":"userId 2","name":"name 2","email":"email 2","password":"password 2","role":"role 2","id":12},{"userId":"userId 3","name":"name 3","email":"email 3","password":"password 3","role":"role 3","id":25},{"userId":"userId 4","name":"name 4","email":"email 4","password":"password 4","role":"role 4","id":37},{"userId":"userId 5","name":"name 5","email":"email 5","password":"password 5","role":"role 5","id":46}],"Vendors":[{"vendorId":"vendorId 1","companyName":"companyName 1","contactName":"contactName 1","email":"email 1","password":"password 1","id":73},{"vendorId":"vendorId 2","companyName":"companyName 2","contactName":"contactName 2","email":"email 2","password":"password 2","id":71},{"vendorId":"vendorId 3","companyName":"companyName 3","contactName":"contactName 3","email":"email 3","password":"password 3","id":8},{"vendorId":"vendorId 4","companyName":"companyName 4","contactName":"contactName 4","email":"email 4","password":"password 4","id":96},{"vendorId":"vendorId 5","companyName":"companyName 5","contactName":"contactName 5","email":"email 5","password":"password 5","id":15}],"Customers":[{"customerId":"customerId 1","email":"email 1","password":"password 1","name":"name 1","billingAddress":"billingAddress 1","defaultShippingAddress":"defaultShippingAddress 1","country":"country 1","phone":"phone 1","cartId":"cartId 1","id":69},{"customerId":"customerId 2","email":"email 2","password":"password 2","name":"name 2","billingAddress":"billingAddress 2","defaultShippingAddress":"defaultShippingAddress 2","country":"country 2","phone":"phone 2","cartId":"cartId 2","id":16},{"customerId":"customerId 3","email":"email 3","password":"password 3","name":"name 3","billingAddress":"billingAddress 3","defaultShippingAddress":"defaultShippingAddress 3","country":"country 3","phone":"phone 3","cartId":"cartId 3","id":1},{"customerId":"customerId 4","email":"email 4","password":"password 4","name":"name 4","billingAddress":"billingAddress 4","defaultShippingAddress":"defaultShippingAddress 4","country":"country 4","phone":"phone 4","cartId":"cartId 4","id":16},{"customerId":"customerId 5","email":"email 5","password":"password 5","name":"name 5","billingAddress":"billingAddress 5","defaultShippingAddress":"defaultShippingAddress 5","country":"country 5","phone":"phone 5","cartId":"cartId 5","id":65}],"Inventory":[{"productId":"productId 1","quantity":1,"lowStockThreshold":1,"id":28},{"productId":"productId 2","quantity":2,"lowStockThreshold":2,"id":84},{"productId":"productId 3","quantity":3,"lowStockThreshold":3,"id":29},{"productId":"productId 4","quantity":4,"lowStockThreshold":4,"id":1},{"productId":"productId 5","quantity":5,"lowStockThreshold":5,"id":76}],"Products":[{"productId":"productId 1","vendorId":1,"name":"name 1","price":0.16,"weight":0.05,"description":"description 1","thumbnail":"thumbnail 1","image":"image 1","category":1,"createDate":"2023-10-20T10:11:45.377Z","stock":1,"id":32},{"productId":"productId 2","vendorId":2,"name":"name 2","price":0.38,"weight":0.63,"description":"description 2","thumbnail":"thumbnail 2","image":"image 2","category":2,"createDate":"2023-06-13T08:24:16.562Z","stock":2,"id":88},{"productId":"productId 3","vendorId":3,"name":"name 3","price":0.61,"weight":0.72,"description":"description 3","thumbnail":"thumbnail 3","image":"image 3","category":3,"createDate":"2023-07-26T09:51:13.981Z","stock":3,"id":75},{"productId":"productId 4","vendorId":4,"name":"name 4","price":0.69,"weight":0.99,"description":"description 4","thumbnail":"thumbnail 4","image":"image 4","category":4,"createDate":"2024-08-06T04:33:42.449Z","stock":4,"id":28},{"productId":"productId 5","vendorId":5,"name":"name 5","price":0.9,"weight":0.21,"description":"description 5","thumbnail":"thumbnail 5","image":"image 5","category":5,"createDate":"2023-11-27T04:38:01.839Z","stock":5,"id":90}],"ProductCategories":[{"categoryId":"categoryId 1","productId":1,"description":"description 1","id":37},{"categoryId":"categoryId 2","productId":2,"description":"description 2","id":5},{"categoryId":"categoryId 3","productId":3,"description":"description 3","id":69},{"categoryId":"categoryId 4","productId":4,"description":"description 4","id":42},{"categoryId":"categoryId 5","productId":5,"description":"description 5","id":9}],"Discounts":[{"productId":1,"discountName":"discountName 1","description":"description 1","discountAmount":0.25,"discountPercent":0.66,"id":19},{"productId":2,"discountName":"discountName 2","description":"description 2","discountAmount":0.55,"discountPercent":0.02,"id":66},{"productId":3,"discountName":"discountName 3","description":"description 3","discountAmount":0.3,"discountPercent":0.8,"id":4},{"productId":4,"discountName":"discountName 4","description":"description 4","discountAmount":0.01,"discountPercent":1,"id":72},{"productId":5,"discountName":"discountName 5","description":"description 5","discountAmount":0.17,"discountPercent":0.61,"id":65}],"ShoppingCart":[{"cartId":"cartId 1","customerId":1,"productId":1,"price":0.06,"quantity":1,"id":68},{"cartId":"cartId 2","customerId":2,"productId":2,"price":0.25,"quantity":2,"id":94},{"cartId":"cartId 3","customerId":3,"productId":3,"price":0,"quantity":3,"id":24},{"cartId":"cartId 4","customerId":4,"productId":4,"price":0.9,"quantity":4,"id":69},{"cartId":"cartId 5","customerId":5,"productId":5,"price":0.42,"quantity":5,"id":55}],"Orders":[{"orderId":"orderId 1","customerId":1,"totalAmount":0.27,"vat":0.39,"productTotalAmount":0.33,"shippingCost":0.18,"shippingAddress":"shippingAddress 1","orderAddress":"orderAddress 1","orderEmail":"orderEmail 1","orderDate":"2024-06-26T01:18:02.989Z","orderStatus":"orderStatus 1","trackingNo":"trackingNo 1","id":45},{"orderId":"orderId 2","customerId":2,"totalAmount":0.87,"vat":0.45,"productTotalAmount":0.11,"shippingCost":0.14,"shippingAddress":"shippingAddress 2","orderAddress":"orderAddress 2","orderEmail":"orderEmail 2","orderDate":"2023-09-09T06:08:04.613Z","orderStatus":"orderStatus 2","trackingNo":"trackingNo 2","id":87},{"orderId":"orderId 3","customerId":3,"totalAmount":0.53,"vat":0.75,"productTotalAmount":0.28,"shippingCost":0.59,"shippingAddress":"shippingAddress 3","orderAddress":"orderAddress 3","orderEmail":"orderEmail 3","orderDate":"2023-07-13T06:12:22.982Z","orderStatus":"orderStatus 3","trackingNo":"trackingNo 3","id":80},{"orderId":"orderId 4","customerId":4,"totalAmount":0.01,"vat":0.58,"productTotalAmount":0.78,"shippingCost":0.27,"shippingAddress":"shippingAddress 4","orderAddress":"orderAddress 4","orderEmail":"orderEmail 4","orderDate":"2025-02-07T10:02:04.764Z","orderStatus":"orderStatus 4","trackingNo":"trackingNo 4","id":7},{"orderId":"orderId 5","customerId":5,"totalAmount":0.1,"vat":0.3,"productTotalAmount":0.99,"shippingCost":0.17,"shippingAddress":"shippingAddress 5","orderAddress":"orderAddress 5","orderEmail":"orderEmail 5","orderDate":"2024-07-02T09:06:47.572Z","orderStatus":"orderStatus 5","trackingNo":"trackingNo 5","id":72}],"OrderDetails":[{"orderId":1,"productId":1,"price":0.92,"quantity":1,"id":43},{"orderId":2,"productId":2,"price":0.43,"quantity":2,"id":44},{"orderId":3,"productId":3,"price":0.12,"quantity":3,"id":53},{"orderId":4,"productId":4,"price":0.42,"quantity":4,"id":31},{"orderId":5,"productId":5,"price":0.15,"quantity":5,"id":19}],"Payments":[{"paymentId":"paymentId 1","orderId":1,"amount":0.68,"paymentMethod":"paymentMethod 1","paymentDate":"2024-04-17T04:17:05.079Z","paymentStatus":"paymentStatus 1","id":52},{"paymentId":"paymentId 2","orderId":2,"amount":0.34,"paymentMethod":"paymentMethod 2","paymentDate":"2023-03-11T05:33:38.371Z","paymentStatus":"paymentStatus 2","id":0},{"paymentId":"paymentId 3","orderId":3,"amount":0.51,"paymentMethod":"paymentMethod 3","paymentDate":"2023-10-14T19:00:54.892Z","paymentStatus":"paymentStatus 3","id":9},{"paymentId":"paymentId 4","orderId":4,"amount":0.23,"paymentMethod":"paymentMethod 4","paymentDate":"2025-01-17T22:52:14.612Z","paymentStatus":"paymentStatus 4","id":61},{"paymentId":"paymentId 5","orderId":5,"amount":0.5,"paymentMethod":"paymentMethod 5","paymentDate":"2023-05-25T19:19:39.106Z","paymentStatus":"paymentStatus 5","id":16}],"Reviews":[{"reviewId":"reviewId 1","productId":1,"customerId":1,"vendorId":1,"rating":1,"reviewDetails":"reviewDetails 1","date":"2024-06-06T09:43:05.063Z","id":64},{"reviewId":"reviewId 2","productId":2,"customerId":2,"vendorId":2,"rating":2,"reviewDetails":"reviewDetails 2","date":"2024-03-27T23:49:58.631Z","id":57},{"reviewId":"reviewId 3","productId":3,"customerId":3,"vendorId":3,"rating":3,"reviewDetails":"reviewDetails 3","date":"2023-09-25T20:33:41.953Z","id":67},{"reviewId":"reviewId 4","productId":4,"customerId":4,"vendorId":4,"rating":4,"reviewDetails":"reviewDetails 4","date":"2024-03-19T19:18:10.140Z","id":71},{"reviewId":"reviewId 5","productId":5,"customerId":5,"vendorId":5,"rating":5,"reviewDetails":"reviewDetails 5","date":"2023-08-06T10:46:19.065Z","id":38}],"SupportTickets":[{"ticketId":"ticketId 1","userId":1,"customerId":1,"description":"description 1","status":"status 1","creationDate":"2023-11-22T18:33:07.636Z","resolutionDate":"2024-05-13T04:11:13.959Z","id":58},{"ticketId":"ticketId 2","userId":2,"customerId":2,"description":"description 2","status":"status 2","creationDate":"2024-09-16T09:40:43.014Z","resolutionDate":"2023-06-25T18:49:07.271Z","id":39},{"ticketId":"ticketId 3","userId":3,"customerId":3,"description":"description 3","status":"status 3","creationDate":"2024-07-18T16:19:58.993Z","resolutionDate":"2023-10-02T06:24:40.228Z","id":36},{"ticketId":"ticketId 4","userId":4,"customerId":4,"description":"description 4","status":"status 4","creationDate":"2024-01-05T18:05:41.861Z","resolutionDate":"2024-02-12T10:50:41.792Z","id":2},{"ticketId":"ticketId 5","userId":5,"customerId":5,"description":"description 5","status":"status 5","creationDate":"2025-01-24T14:27:49.133Z","resolutionDate":"2024-07-04T01:41:47.771Z","id":28}]};
    //Autogenerate multiple such calls ie for each resource and its data object
    let isSeeded = await this.IsSeeded();
    //if (!isSeeded) {
    //forcing app recreation
    if (true){
      console.log('   Seeding database...');
      await this.SeedResource("UsersEntity", data.Users);
await this.SeedResource("VendorsEntity", data.Vendors);
await this.SeedResource("CustomersEntity", data.Customers);
await this.SeedResource("InventoryEntity", data.Inventory);
await this.SeedResource("ProductsEntity", data.Products);
await this.SeedResource("ProductCategoriesEntity", data.ProductCategories);
await this.SeedResource("DiscountsEntity", data.Discounts);
await this.SeedResource("ShoppingCartEntity", data.ShoppingCart);
await this.SeedResource("OrdersEntity", data.Orders);
await this.SeedResource("OrderDetailsEntity", data.OrderDetails);
await this.SeedResource("PaymentsEntity", data.Payments);
await this.SeedResource("ReviewsEntity", data.Reviews);
await this.SeedResource("SupportTicketsEntity", data.SupportTickets); 
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

