declare class WalletService {
    private walletRepository;
    private transactionService;
    constructor();
    getAllWallet: (id: any) => Promise<any>;
    createWallet: (wallet: any) => Promise<any>;
    updateWallet: (id: any, newWallet: any) => Promise<any>;
    delete: (id: any) => Promise<any>;
    transaction: (id: any) => Promise<any>;
    addMoney: (id: any, type: any, money: any) => Promise<any>;
    editMoney: (id: any, idWallet: any, type: any, money: any) => Promise<any>;
    deleteMoney: (id: any) => Promise<any>;
}
declare const _default: WalletService;
export default _default;
