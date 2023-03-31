import { Request, Response } from 'express';
declare class CategoryController {
    constructor();
    getAll: (req: Request, res: Response) => Promise<void>;
    create: (req: Request, res: Response) => Promise<void>;
    delete: (req: Request, res: Response) => Promise<void>;
    update: (req: Request, res: Response) => Promise<void>;
}
declare const _default: CategoryController;
export default _default;
