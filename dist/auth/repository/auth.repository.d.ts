import { Repository } from "typeorm";
import { UserEntity } from "src/user/entity/user.entity";
import { AuthDTO } from "../dto/auth.dto";
import { JwtService } from "@nestjs/jwt";
export declare class AuthRepository {
    private readonly authRepository;
    private jwtService;
    constructor(authRepository: Repository<UserEntity>, jwtService: JwtService);
    findOne(data: AuthDTO): Promise<string>;
}
