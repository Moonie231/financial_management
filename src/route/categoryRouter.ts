import {Router} from "express";
import categoryController from "../controller/categoryController";
export const categoryRouter = Router()
categoryRouter.get('',categoryController.getAll)
categoryRouter.post('/create',categoryController.create)
categoryRouter.put('',categoryController.update)
categoryRouter.delete('',categoryController.delete)