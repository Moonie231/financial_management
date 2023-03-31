"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.walletRoter = void 0;
const express_1 = require("express");
const walletController_1 = __importDefault(require("../controller/walletController"));
exports.walletRoter = (0, express_1.Router)();
exports.walletRoter.post('/', walletController_1.default.create);
//# sourceMappingURL=walletRoter.js.map