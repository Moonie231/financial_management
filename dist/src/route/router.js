"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const walletRouter_1 = require("./walletRouter");
const userRouter_1 = require("./userRouter");
const categoryRouter_1 = require("./categoryRouter");
const transactionRouter_1 = require("./transactionRouter");
exports.router = (0, express_1.Router)();
exports.router.use('/wallets', walletRouter_1.walletRouter);
exports.router.use('/users', userRouter_1.userRouter);
exports.router.use('/categories', categoryRouter_1.categoryRouter);
exports.router.use('/transactions', transactionRouter_1.transactionRouter);
//# sourceMappingURL=router.js.map