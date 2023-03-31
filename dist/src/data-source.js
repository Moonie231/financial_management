"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const transaction_1 = require("./model/transaction");
const wallet_1 = require("./model/wallet");
const category_1 = require("./model/category");
const user_1 = require("./model/user");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: "127.0.0.1",
    port: 3306,
    username: "root",
    password: "123456",
    database: "financial_management",
    synchronize: true,
    entities: [transaction_1.Transaction, wallet_1.Wallet, user_1.User, category_1.Category]
});
//# sourceMappingURL=data-source.js.map