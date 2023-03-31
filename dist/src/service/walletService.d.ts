declare class WalletService {
    private walletRepository;
    constructor();
    createWallet: (wallet: any) => Promise<any>;
}
declare const _default: WalletService;
export default _default;
