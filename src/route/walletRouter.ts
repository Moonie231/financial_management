import {Router} from "express";
import WalletController from "../controller/walletController";

export const walletRouter = Router()
walletRouter.post('/', WalletController.create)