"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.walletRouter = void 0;
const express_1 = require("express");
const walletController_1 = __importDefault(require("../controller/walletController"));
exports.walletRouter = (0, express_1.Router)();
exports.walletRouter.get('/:id', walletController_1.default.showWallet);
exports.walletRouter.post('/create', walletController_1.default.create);
exports.walletRouter.put('/edit/:id', walletController_1.default.edit);
exports.walletRouter.delete('/delete/:id', walletController_1.default.delete);
//# sourceMappingURL=walletRouter.js.map