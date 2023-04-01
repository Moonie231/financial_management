import {Router} from "express";
import transactionController from "../controller/transactionController";
export const transactionRouter = Router()

transactionRouter.get('/getAll/:id',transactionController.getAll)
transactionRouter.post('',transactionController.create)
transactionRouter.delete('/:id',transactionController.delete)
transactionRouter.put('/edit/:id',transactionController.update)
transactionRouter.get('/search',transactionController.findByType)
transactionRouter.get("/findById/:id", transactionController.findById)
transactionRouter.get('/month/search',transactionController.searchByMonth)
transactionRouter.get('/date/search',transactionController.searchByDate)