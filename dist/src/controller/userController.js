"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userService_1 = __importDefault(require("../service/userService"));
class UserController {
    constructor() {
        this.register = async (req, res) => {
            try {
                let user = await this.UserService.register(req.body);
                res.status(201).json(user);
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        };
        this.login = async (req, res) => {
            try {
                let response = await this.UserService.checkUser(req.body);
                res.status(200).json(response);
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        };
        this.UserService = userService_1.default;
    }
}
exports.default = new UserController();
//# sourceMappingURL=userController.js.map