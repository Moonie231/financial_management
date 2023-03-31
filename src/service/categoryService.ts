import {AppDataSource} from "../data-source";
import {Category} from "../model/category";

class CategoryService {
    private categoryRepository

    constructor() {
        this.categoryRepository = AppDataSource.getRepository(Category)
    }

    getAll = async () => {
        let sql = `select * from category`
        return await this.categoryRepository.query(sql)
    }
    save = async (category) =>{
        return await  this.categoryRepository.save(category)
    }
    delete = async (id)=>{
        let category = this.categoryRepository.findOneBy({idCategory:id})
        if(!category){
            return null
        }
        else {
            this.categoryRepository.delete({idCategory:id})
        }

    }
    update = async (id,newCategory)=>{
        let category = this.categoryRepository.findOneBy({idCategory:id})
        if(!category){
            return null
        }
        else {
            this.categoryRepository.update({idCategory:id},newCategory)
        }
    }
}

export default new CategoryService()