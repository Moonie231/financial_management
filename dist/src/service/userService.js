"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../model/user");
const data_source_1 = require("../data-source");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class UserService {
    constructor() {
        this.register = async (user) => {
            user.password = await bcrypt_1.default.hash(user.password, 10);
            return this.userRepository.save(user);
        };
        this.checkUser = async (user) => {
            try {
                let userCheck = await this.userRepository.findOneBy({ userName: user.userName });
                if (!userCheck) {
                    return "User not found";
                }
                else {
                    let passwordCompare = await bcrypt_1.default.compare(user.password, userCheck.password);
                    if (!passwordCompare) {
                        return 'Password does not match';
                    }
                    else {
                        let payload = {
                            idUser: userCheck.idUser,
                            userName: userCheck.userName,
                            role: userCheck.role,
                            status: userCheck.status
                        };
                        const SECRET = '123456';
                        const token = jsonwebtoken_1.default.sign(payload, SECRET, {
                            expiresIn: 36000
                        });
                        const check = {
                            token: token,
                            idUser: userCheck.idUser,
                            userName: userCheck.username,
                            role: userCheck.role,
                            status: userCheck.status
                        };
                        return check;
                    }
                }
            }
            catch (e) {
                console.log(e.message);
            }
        };
        this.userRepository = data_source_1.AppDataSource.getRepository(user_1.User);
    }
}
exports.default = new UserService();
//# sourceMappingURL=userService.js.map