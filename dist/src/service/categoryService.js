"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../data-source");
const category_1 = require("../model/category");
class CategoryService {
    constructor() {
        this.getAll = async () => {
            let sql = `select * from category`;
            return await this.categoryRepository.query(sql);
        };
        this.save = async (category) => {
            return await this.categoryRepository.save(category);
        };
        this.delete = async (id) => {
            let category = this.categoryRepository.findOneBy({ idCategory: id });
            if (!category) {
                return null;
            }
            else {
                this.categoryRepository.delete({ idCategory: id });
            }
        };
        this.update = async (id, newCategory) => {
            let category = this.categoryRepository.findOneBy({ idCategory: id });
            if (!category) {
                return null;
            }
            else {
                this.categoryRepository.update({ idCategory: id }, newCategory);
            }
        };
        this.categoryRepository = data_source_1.AppDataSource.getRepository(category_1.Category);
    }
}
exports.default = new CategoryService();
//# sourceMappingURL=categoryService.js.map