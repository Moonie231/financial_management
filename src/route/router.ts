import {Router} from "express";
import {walletRoter} from "./walletRoter";

export const router = Router()
router.use('/wallets', walletRoter)