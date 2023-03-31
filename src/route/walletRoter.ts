import {Router} from "express";
import WalletController from "../controller/walletController";

export const walletRoter = Router()
walletRoter.post('/', WalletController.create)