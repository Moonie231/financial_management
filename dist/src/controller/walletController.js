"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const walletService_1 = __importDefault(require("../service/walletService"));
class WalletController {
    constructor() {
        this.showWallet = async (req, res) => {
            try {
                let id = req.params.id;
                let wallet = await this.WalletService.getAllWallet(id);
                res.status(200).json(wallet);
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        };
        this.create = async (req, res) => {
            try {
                let save = await this.WalletService.createWallet(req.body);
                res.status(201).json(save);
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        };
        this.WalletService = walletService_1.default;
    }
}
exports.default = new WalletController();
//# sourceMappingURL=walletController.js.map