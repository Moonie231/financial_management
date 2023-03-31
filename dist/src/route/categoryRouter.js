"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryRouter = void 0;
const express_1 = require("express");
const categoryController_1 = __importDefault(require("../controller/categoryController"));
exports.categoryRouter = (0, express_1.Router)();
exports.categoryRouter.get('', categoryController_1.default.getAll);
exports.categoryRouter.post('/create', categoryController_1.default.create);
exports.categoryRouter.put('', categoryController_1.default.update);
exports.categoryRouter.delete('', categoryController_1.default.delete);
//# sourceMappingURL=categoryRouter.js.map