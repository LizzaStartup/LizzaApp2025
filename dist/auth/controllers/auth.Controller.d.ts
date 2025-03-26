import { AuthDTO } from "../dto/auth.dto";
import { AuthRepository } from "../repository/auth.repository";
export declare class AuthController {
    private repository;
    constructor(repository: AuthRepository);
    login(data: AuthDTO): Promise<{
        token: string;
    }>;
}
