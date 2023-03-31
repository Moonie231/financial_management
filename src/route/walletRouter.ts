import {Router} from "express";
import WalletController from "../controller/walletController";

export const walletRouter = Router()
walletRouter.get('/:id', WalletController.showWallet)
walletRouter.post('/create', WalletController.create)
walletRouter.put('/edit/:id', WalletController.edit)
walletRouter.delete('/delete/:id', WalletController.delete)