import {AppDataSource} from "../data-source";
import {Wallet} from "../model/wallet";

class WalletService {
    private walletRepository;
    // private transactionService

    constructor() {
        this.walletRepository = AppDataSource.getRepository(Wallet);
        // this.transactionService = transactionService
    }

    // getAllWallet = async (id) => {
    //     let sql = `SELECT *
    //                from wallet
    //                where user = ${id}`
    //     let wallet = await this.walletRepository.query(sql)
    //     return wallet;
    // }

    createWallet = async (wallet) => {
        return await this.walletRepository.save(wallet)
    }
}

export default new WalletService()