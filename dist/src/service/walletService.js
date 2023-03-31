"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../data-source");
const wallet_1 = require("../model/wallet");
const transactionService_1 = __importDefault(require("./transactionService"));
class WalletService {
    constructor() {
        this.getAllWallet = async (id) => {
            let sql = `SELECT *
                   from wallet
                   where user = ${id}`;
            let wallet = await this.walletRepository.query(sql);
            return wallet;
        };
        this.createWallet = async (wallet) => {
            return await this.walletRepository.save(wallet);
        };
        this.updateWallet = async (id, newWallet) => {
            return await this.walletRepository.update({ idWallet: id }, newWallet);
        };
        this.delete = async (id) => {
            let wallet = await this.walletRepository.findOneBy({ idWallet: id });
            if (!wallet) {
                return null;
            }
            return await this.walletRepository.delete({ idWallet: id });
        };
        this.transaction = async (id) => {
            let wallet = await this.walletRepository.findOneBy({ idWallet: id });
            let sql = `select * from transaction 
                    join wallet on transaction.wallet = wallet.idWallet 
                    where wallet.idWallet = ${wallet.idWallet}`;
            return await this.walletRepository.query(sql);
        };
        this.addMoney = async (id, type, money) => {
            let a = Number(money);
            if (type === 'income') {
                let moneyWallet = await this.walletRepository.findOneBy({ idWallet: id });
                let income = moneyWallet.incomeMoney;
                let b = Number(income);
                let c = a + b;
                return await this.walletRepository.update({ idWallet: id }, { incomeMoney: c });
            }
            else {
                let moneyWallet = await this.walletRepository.findOneBy({ idWallet: id });
                let pay = moneyWallet.payMoney;
                let n = Number(pay);
                let d = a + n;
                return await this.walletRepository.update({ idWallet: id }, { payMoney: d });
            }
        };
        this.editMoney = async (id, idWallet, type, money) => {
            let d = Number(money);
            let moneyTransaction = await this.transactionService.findById(id);
            let a = Number(moneyTransaction.money);
            let moneyWallet = await this.walletRepository.findOneBy({ idWallet: idWallet });
            let b = Number(moneyWallet.incomeMoney);
            let g = Number(moneyWallet.payMoney);
            if (type === 'income') {
                let c = b - a + d;
                return await this.walletRepository.update({ idWallet: idWallet }, { incomeMoney: c });
            }
            else {
                let e = g - a + d;
                return await this.walletRepository.update({ idWallet: idWallet }, { payMoney: e });
            }
        };
        this.deleteMoney = async (id) => {
            let transaction = await this.transactionService.findById(id);
            let idWallet = transaction.wallet;
            let a = transaction.money;
            let type = transaction.type;
            let moneyWallet = await this.walletRepository.findOneBy({ idWallet: idWallet });
            let b = moneyWallet.payMoney;
            let c = moneyWallet.incomeMoney;
            if (type === 'income') {
                let d = c - a;
                return await this.walletRepository.update({ idWallet: idWallet }, { incomeMoney: d });
            }
            else {
                let g = b - a;
                return await this.walletRepository.update({ idWallet: idWallet }, { payMoney: g });
            }
        };
        this.walletRepository = data_source_1.AppDataSource.getRepository(wallet_1.Wallet);
        this.transactionService = transactionService_1.default;
    }
}
exports.default = new WalletService();
//# sourceMappingURL=walletService.js.map