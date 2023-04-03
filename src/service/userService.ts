import {User} from "../model/user";
import {AppDataSource} from "../data-source";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"


class UserService {
    private userRepository;

    constructor() {
        this.userRepository = AppDataSource.getRepository(User);
    }

    register = async (user) => {
        let userCheck = await this.userRepository.findOneBy({userName: user.userName})
        if (userCheck){
            return "Username already registered"
        }
        user.password = await bcrypt.hash(user.password, 10)
        return this.userRepository.save(user)
    }

    checkUser = async (user) => {
        try {
            let userCheck = await this.userRepository.findOneBy({userName: user.userName})
            if (!userCheck) {
                return "User not found"
            } else {
                let passwordCompare = await bcrypt.compare(user.password, userCheck.password)
                if (!passwordCompare) {
                    return 'Password does not match'
                } else {
                    let payload = {
                        idUser: userCheck.idUser,
                        userName: userCheck.userName,
                        role: userCheck.role,
                        status: userCheck.status
                    }
                    const SECRET = '123456'
                    const token = jwt.sign(payload, SECRET, {
                        expiresIn: 36000
                    })
                    const check = {
                        token: token,
                        idUser: userCheck.idUser,
                        userName: userCheck.username,
                        role: userCheck.role,
                        status: userCheck.status
                    }
                    return check;
                }
            }
        } catch (e) {
            console.log(e.message)
        }

    }
}

export default new UserService()