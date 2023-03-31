"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.transactionRouter = void 0;
const express_1 = require("express");
const transactionController_1 = __importDefault(require("../controller/transactionController"));
exports.transactionRouter = (0, express_1.Router)();
exports.transactionRouter.get('/getAll/:id', transactionController_1.default.getAll);
exports.transactionRouter.post('', transactionController_1.default.create);
exports.transactionRouter.delete('/:id', transactionController_1.default.delete);
exports.transactionRouter.put('/:id', transactionController_1.default.update);
exports.transactionRouter.get('/search', transactionController_1.default.findByType);
exports.transactionRouter.get("/findById/:id", transactionController_1.default.findById);
exports.transactionRouter.get('/month/search', transactionController_1.default.searchByMonth);
exports.transactionRouter.get('/date/search', transactionController_1.default.searchByDate);
//# sourceMappingURL=tranactionRouter.js.map