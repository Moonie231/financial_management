import {Router} from "express";
import {walletRouter} from "./walletRouter";
import {userRouter} from "./userRouter";
import {categoryRouter} from "./categoryRouter";

export const router = Router()
router.use('/wallets', walletRouter)
router.use('/users',userRouter)
router.use('/categories',categoryRouter)