import  {Request, Response} from 'express';
import categoryService from "../service/categoryService";

class CategoryController {
    constructor() {
    }

    getAll = async (req: Request, res: Response) => {
        try {
            let categories = await categoryService.getAll();
            res.status(200).json(categories)
        } catch (e) {
            res.status(500).json(e.message);
        }
    };
    create = async (req:Request, res :Response)=>{
        try{
            let category = await categoryService.save(req.body)
            res.status(200).json(category)
        }
        catch (e){
            res.status(200).json(e.message)
        }
    }
    delete = async (req:Request, res :Response)=>{
        try{
            let id = req.params.id
            await categoryService.delete(id)
            res.status(200).json('Delete Success!!!')
        }
        catch (e){
            res.status(200).json(e.message)
        }
    }

    update = async (req:Request, res :Response)=>{
        try{
            let id = req.params.id
            let newCategory = req.body
            await categoryService.update(id,newCategory)
            res.status(200).json('Delete Success!!!')
        }
        catch (e){
            res.status(200).json(e.message)
        }
    }

}
export default new CategoryController()