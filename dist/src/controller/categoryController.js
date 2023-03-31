"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const categoryService_1 = __importDefault(require("../service/categoryService"));
class CategoryController {
    constructor() {
        this.getAll = async (req, res) => {
            try {
                let categories = await categoryService_1.default.getAll();
                res.status(200).json(categories);
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        };
        this.create = async (req, res) => {
            try {
                let category = await categoryService_1.default.save(req.body);
                res.status(200).json(category);
            }
            catch (e) {
                res.status(200).json(e.message);
            }
        };
        this.delete = async (req, res) => {
            try {
                let id = req.params.id;
                await categoryService_1.default.delete(id);
                res.status(200).json('Delete Success!!!');
            }
            catch (e) {
                res.status(200).json(e.message);
            }
        };
        this.update = async (req, res) => {
            try {
                let id = req.params.id;
                let newCategory = req.body;
                await categoryService_1.default.update(id, newCategory);
                res.status(200).json('Delete Success!!!');
            }
            catch (e) {
                res.status(200).json(e.message);
            }
        };
    }
}
exports.default = new CategoryController();
//# sourceMappingURL=categoryController.js.map