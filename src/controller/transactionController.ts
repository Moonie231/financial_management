import  {Request, Response} from 'express';
import transactionService from "../service/transactionService";
import categoryService from "../service/categoryService";
import walletService from "../service/walletService";

class TransactionController {
    constructor() {
    }

    getAll = async (req: Request, res: Response) => {
        try {
            let id = req.params.id
            let category = await categoryService.getAll()
            let transaction = await transactionService.getAll(id);
            let all = {category, transaction}
            res.status(200).json(all)
        } catch (e) {
            res.status(500).json(e.message);
        }
    };
    create = async (req: Request, res :Response)=>{
        try{
            let newTransaction = {
                wallet: req.params.wallet,
                category: req.body.category,
                type: req.body.type,
                money: req.body.money,
                month: new Date().getMonth() + 1,
                date: new Date().getDate()
            }
            await transactionService.save(newTransaction)
            await walletService.addMoney(req.params.wallet,req.body.type,req.body.money)
            res.status(200).json("add ok")
        }
        catch (e){
            res.status(500).json(e.message)
        }
    }
    delete = async (req: Request, res :Response)=>{
        try{
            let id =  req.params.id
            await walletService.deleteMoney(id)
            await transactionService.remove(id)
            res.status(200).json('Delete Success !!!')
        }
        catch (e){
            res.status(500).json(e.message)
        }
    }
    update = async (req: Request, res :Response)=> {
        try {
            let id = req.params.id
            let newTransaction = {
                wallet: req.params.wallet,
                category: req.body.category,
                type: req.body.type,
                money: req.body.money,
                month: new Date().getMonth() + 1,
                date: new Date().getDate()
            }
            await walletService.editMoney(id,req.params.wallet,req.body.type,req.body.money)
            await transactionService.update(id,newTransaction)
            res.status(200).json('Update Success !!!')
        }  catch (e){
            res.status(500).json(e.message)
        }
    }
    findById = async (req: Request, res :Response)=> {
        try {
            let id = req.params.id
            let transaction = await transactionService.findById(id)
            res.status(200).json(transaction)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
    findByType = async (req: Request, res :Response)=> {
        try {
            let type = req.query.type
            let id = req.query.wallet
            let transaction = await transactionService.findByType(type, id)
            res.status(200).json(transaction)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }

    searchByMonth = async (req: Request, res :Response) => {
        try {
            let id = req.query.id
            let month = req.query.month
            let transaction = await transactionService.searchByMonth(id,month)
            res.status(200).json(transaction)
        } catch (e) {
            console.log(e)
            res.status(500).json(e.message)
        }
    }
    searchByDate = async (req, res ) =>{
        try {
            let date = req.query.date
            let id = req.query.id
            let month = req.query.month
            let transaction = await transactionService.searchByDate(id,month, date)
            res.status(200).json(transaction)
        }catch (e) {
            res.status(500).json(e.message);

        }
    }
}
export default new TransactionController()