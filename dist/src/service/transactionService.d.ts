declare class TransactionService {
    private transactionRepository;
    constructor();
    getAll: (id: any) => Promise<any>;
    save: (transaction: any) => Promise<any>;
    findById: (id: any) => Promise<any>;
    remove: (id: any) => Promise<any>;
    update: (id: any, newTransaction: any) => Promise<any>;
    findByType: (type: any, id: any) => Promise<any>;
    searchByMonth: (id: any, month: any) => Promise<any>;
    searchByDate: (id: any, month: any, date: any) => Promise<any>;
}
declare const _default: TransactionService;
export default _default;
