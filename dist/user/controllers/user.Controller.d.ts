import { UserRepository } from "src/user/repository/user.repository";
import { CreateUserDTO } from "../dto/createUser.dto";
import { UserEntity } from "../entity/user.entity";
import { ListDTO } from "../dto/listUser.dto";
export declare class UserController {
    private repository;
    constructor(repository: UserRepository);
    insert(dataUser: CreateUserDTO): Promise<"usuario nao cadastrado" | {
        id: string;
        message: string;
    }>;
    fetchUsers(): Promise<ListDTO[]>;
    FetchData(id: string): Promise<UserEntity>;
}
