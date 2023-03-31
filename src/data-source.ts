import "reflect-metadata"
import { DataSource } from "typeorm"
import {Transaction} from "./model/transaction";
import {Wallet} from "./model/wallet";
import {Category} from "./model/category";
import {User} from "./model/user";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "127.0.0.1",
    port: 3306,
    username: "root",
    password: "123456",
    database: "financial_management",
    synchronize: true,
    entities: [Transaction, Wallet, User, Category]
})