import { Request, Response } from 'express';
declare class TransactionController {
    constructor();
    getAll: (req: Request, res: Response) => Promise<void>;
    create: (req: Request, res: Response) => Promise<void>;
    delete: (req: Request, res: Response) => Promise<void>;
    update: (req: Request, res: Response) => Promise<void>;
    findById: (req: Request, res: Response) => Promise<void>;
    findByType: (req: Request, res: Response) => Promise<void>;
    searchByMonth: (req: Request, res: Response) => Promise<void>;
    searchByDate: (req: any, res: any) => Promise<void>;
}
declare const _default: TransactionController;
export default _default;
