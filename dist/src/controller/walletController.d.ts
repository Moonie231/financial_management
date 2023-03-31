declare class WalletController {
    private WalletService;
    constructor();
    showWallet: (req: any, res: any) => Promise<void>;
    create: (req: any, res: any) => Promise<void>;
    edit: (req: any, res: any) => Promise<void>;
    delete: (req: any, res: any) => Promise<void>;
}
declare const _default: WalletController;
export default _default;
