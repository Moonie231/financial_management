import WalletService from "../service/walletService";

class WalletController {
    private WalletService

    constructor() {
        this.WalletService = WalletService;
    }

    showWallet = async (req, res) => {
        try {
            let id = req.params.id
            let wallet = await this.WalletService.getAllWallet(id)
            res.status(200).json(wallet)
        } catch (e) {
            res.status(500).json(e.message);

        }
    }

    create = async (req, res) => {
        try {
            let save = await this.WalletService.createWallet(req.body)
            res.status(201).json(save)
        } catch (e) {
            res.status(500).json(e.message);
        }
    }

    edit = async (req, res) => {
        try {
            let id = req.params.id
            let newWallet = await this.WalletService.updateWallet(id, req.body)
            res.status(200).json(newWallet)
        }catch (e) {
            res.status(500).json(e.message);

        }
    }

    delete = async (req, res) => {
        try {
            let id = req.params.id
            res.status(200).json(await this.WalletService.delete(id))
        }catch (e) {
            res.status(500).json(e.message);
        }
    }
}

export default new WalletController()