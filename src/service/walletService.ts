import {AppDataSource} from "../data-source";
import {Wallet} from "../model/wallet";
import transactionService from "./transactionService";

class WalletService {
    private walletRepository;
    private transactionService

    constructor() {
        this.walletRepository = AppDataSource.getRepository(Wallet);
        this.transactionService = transactionService
    }

    getAllWallet = async (id) => {
        let sql = `SELECT *
                   from wallet
                   where user = ${id}`
        let wallet = await this.walletRepository.query(sql)
        return wallet;
    }

    createWallet = async (wallet) => {
        return await this.walletRepository.save(wallet)
    }

    updateWallet = async (id, newWallet) => {
        return await this.walletRepository.update({idWallet: id}, newWallet)
    }
    delete = async (id) => {
        let wallet = await this.walletRepository.findOneBy({idWallet: id})
        if (!wallet) {
            return null
        }
        return await this.walletRepository.delete({idWallet: id})
    }
    transaction = async (id) => {
        let wallet = await this.walletRepository.findOneBy({idWallet: id})
        let sql = `select * from transaction 
                    join wallet on transaction.wallet = wallet.idWallet 
                    where wallet.idWallet = ${wallet.idWallet}`
        return  await this.walletRepository.query(sql)
    }
    addMoney = async (id,type,money) => {
        let a = Number(money)
        if (type === 'income') {
            let moneyWallet = await this.walletRepository.findOneBy({idWallet: id})
            let income = moneyWallet.incomeMoney
            let b = Number(income)
            let c = a + b
            return await this.walletRepository.update({idWallet: id},{incomeMoney: c})
        } else {
            let moneyWallet = await this.walletRepository.findOneBy({idWallet: id})
            let pay = moneyWallet.payMoney
            let n = Number(pay)
            let d = a + n
            return await this.walletRepository.update({idWallet: id},{payMoney: d})
        }
    }
    editMoney = async (id, idWallet, type, money) => {
        let d = Number(money)
        let moneyTransaction = await this.transactionService.findById(id)
        let a = Number(moneyTransaction.moneyTransaction)
        let moneyWallet = await this.walletRepository.findOneBy({idWallet: idWallet})
        let b = Number(moneyWallet.incomeMoney)
        let g = Number(moneyWallet.payMoney)
        if (type === 'income') {
            let c = b - a +d
            return await this.walletRepository.update({idWallet: idWallet} ,{incomeMoney: c})
        } else {
            let e = g - a +d
            return await this.walletRepository.update({idWallet: idWallet} ,{payMoney: e})
        }
    }
    deleteMoney = async (id) => {
        let transaction = await this.transactionService.findById(id)
        let idWallet = transaction.wallet
        let a = transaction.moneyTransaction
        let type = transaction.type
        let moneyWallet = await this.walletRepository.findOneBy({idWallet: idWallet})
        let b = moneyWallet.payMoney
        let c = moneyWallet.incomeMoney
        if (type === 'income') {
            let d = c - a
            return await this.walletRepository.update({idWallet: idWallet} ,{incomeMoney: d})
        } else {
            let g = b - a
            return await this.walletRepository.update({idWallet: idWallet} ,{payMoney: g})
        }
    }
}

export default new WalletService()