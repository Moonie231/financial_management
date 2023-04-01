"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const transactionService_1 = __importDefault(require("../service/transactionService"));
const walletService_1 = __importDefault(require("../service/walletService"));
class TransactionController {
    constructor() {
        this.getAll = async (req, res) => {
            try {
                let id = req.params.id;
                let transaction = await transactionService_1.default.getAll(id);
                res.status(200).json(transaction);
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        };
        this.create = async (req, res) => {
            try {
                let newTransaction = {
                    wallet: req.body.wallet,
                    category: req.body.category,
                    type: req.body.type,
                    moneyTransaction: req.body.moneyTransaction,
                    month: new Date().getMonth() + 1,
                    date: new Date().getDate()
                };
                await transactionService_1.default.save(newTransaction);
                await walletService_1.default.addMoney(req.body.wallet, req.body.type, req.body.moneyTransaction);
                res.status(200).json("add ok");
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        };
        this.delete = async (req, res) => {
            try {
                let id = req.params.id;
                await walletService_1.default.deleteMoney(id);
                await transactionService_1.default.remove(id);
                res.status(200).json('Delete Success !!!');
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        };
        this.update = async (req, res) => {
            try {
                let id = req.params.id;
                let newTransaction = {
                    wallet: req.body.wallet,
                    category: req.body.category,
                    type: req.body.type,
                    moneyTransaction: req.body.moneyTransaction,
                    month: new Date().getMonth() + 1,
                    date: new Date().getDate()
                };
                await walletService_1.default.editMoney(id, req.body.wallet, req.body.type, req.body.moneyTransaction);
                await transactionService_1.default.update(id, newTransaction);
                res.status(200).json('Update Success !!!');
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        };
        this.findById = async (req, res) => {
            try {
                let id = req.params.id;
                let transaction = await transactionService_1.default.findById(id);
                res.status(200).json(transaction);
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        };
        this.findByType = async (req, res) => {
            try {
                let type = req.query.type;
                let id = req.query.wallet;
                let transaction = await transactionService_1.default.findByType(type, id);
                res.status(200).json(transaction);
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        };
        this.searchByMonth = async (req, res) => {
            try {
                let id = req.query.id;
                let month = req.query.month;
                let transaction = await transactionService_1.default.searchByMonth(id, month);
                res.status(200).json(transaction);
            }
            catch (e) {
                console.log(e);
                res.status(500).json(e.message);
            }
        };
        this.searchByDate = async (req, res) => {
            try {
                let date = req.query.date;
                let id = req.query.id;
                let month = req.query.month;
                let transaction = await transactionService_1.default.searchByDate(id, month, date);
                res.status(200).json(transaction);
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        };
    }
}
exports.default = new TransactionController();
//# sourceMappingURL=transactionController.js.map