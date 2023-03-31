declare class UserService {
    private userRepository;
    constructor();
    register: (user: any) => Promise<any>;
    checkUser: (user: any) => Promise<"User not found" | "Password does not match" | {
        token: string;
        idUser: any;
        userName: any;
        role: any;
        status: any;
    }>;
}
declare const _default: UserService;
export default _default;
