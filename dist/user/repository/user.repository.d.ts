import { UserEntity } from "../entity/user.entity";
import { Repository } from "typeorm";
export declare class UserRepository {
    private readonly userRepository;
    constructor(userRepository: Repository<UserEntity>);
    insertDB(dataUsers: UserEntity): Promise<false | UserEntity>;
    fetch(): Promise<UserEntity[]>;
    isEmailExists(email: any): Promise<boolean>;
    fetchById(id: any): Promise<UserEntity>;
}
