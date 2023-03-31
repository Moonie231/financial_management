import {Request, Response} from "express";
import UserService from "../service/userService";
class UserController {
    private UserService
    constructor() {
        this.UserService = UserService;
    }
    register = async (req, res) => {
        try {
            let user = await this.UserService.register(req.body)
            res.status(201).json(user)
        } catch (e) {
            res.status(500).json(e.message);
        }
    }
    login = async (req: Request, res: Response) => {
        try {
            let response = await this.UserService.checkUser(req.body)
            res.status(200).json(response)
        } catch (e) {
            res.status(500).json(e.message);
        }
    }
}
export default new UserController()