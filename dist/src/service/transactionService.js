"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const transaction_1 = require("../model/transaction");
const data_source_1 = require("../data-source");
class TransactionService {
    constructor() {
        this.getAll = async (id) => {
            let sql = `select * from transaction join category on transaction.category = category.idCategory 
         WHERE wallet = ${id}`;
            return await this.transactionRepository.query(sql);
        };
        this.save = async (transaction) => {
            return this.transactionRepository.save(transaction);
        };
        this.findById = async (id) => {
            let transaction = this.transactionRepository.findOneBy({ idTransaction: id });
            return transaction;
        };
        this.remove = async (id) => {
            let transaction = this.transactionRepository.findOneBy({ idTransaction: id });
            if (!transaction) {
                return null;
            }
            else {
                return this.transactionRepository.delete({ idTransaction: id });
            }
        };
        this.update = async (id, newTransaction) => {
            let transaction = this.transactionRepository.findOneBy({ idTransaction: id });
            if (!transaction) {
                return null;
            }
            else {
                return this.transactionRepository.update({ idTransaction: id }, newTransaction);
            }
        };
        this.findByType = async (type, id) => {
            let sql = `select * from transaction join category on transaction.category = category.idCategory where transaction.type like '%${type}%' and wallet = ${id}`;
            let transaction = await this.transactionRepository.query(sql);
            if (!transaction) {
                return null;
            }
            else {
                return transaction;
            }
        };
        this.searchByMonth = async (id, month) => {
            let sql = `select * from transaction
                                     join wallet on transaction.wallet = wallet.idWallet join category on category.idCategory = transaction.category
                   where wallet.idWallet = ${id} and transaction.month = ${month}`;
            return await this.transactionRepository.query(sql);
        };
        this.searchByDate = async (id, month, date) => {
            let sql = `select * from transaction 
                    join wallet on transaction.wallet = wallet.idWallet
                    join category on category.idCategory = transaction.category
                    where wallet.idWallet = ${id} and transaction.month = ${month} and transaction.date = ${date}`;
            return await this.transactionRepository.query(sql);
        };
        this.transactionRepository = data_source_1.AppDataSource.getRepository(transaction_1.Transaction);
    }
}
exports.default = new TransactionService();
//# sourceMappingURL=transactionService.js.map