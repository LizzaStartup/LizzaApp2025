"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const user_repository_1 = require("../repository/user.repository");
const createUser_dto_1 = require("../dto/createUser.dto");
const user_entity_1 = require("../entity/user.entity");
const uuid_1 = require("uuid");
const listUser_dto_1 = require("../dto/listUser.dto");
const auth_guards_1 = require("../../auth/guards/auth.guards");
let UserController = class UserController {
    constructor(repository) {
        this.repository = repository;
    }
    async insert(dataUser) {
        console.log(dataUser.email);
        const userEntity = new user_entity_1.UserEntity();
        userEntity.email = dataUser.email;
        userEntity.name = dataUser.name;
        userEntity.password = dataUser.password;
        userEntity.age = dataUser.age;
        userEntity.cep = dataUser.cep;
        userEntity.address = dataUser.address;
        userEntity.bloodType = dataUser.bloodType;
        userEntity.alergie = dataUser.alergie;
        userEntity.liveAlone = dataUser.liveAlone;
        userEntity.id = (0, uuid_1.v4)();
        const success = this.repository.insertDB(userEntity);
        return success ? { id: userEntity.id, message: 'user created' } : "usuario nao cadastrado";
    }
    async fetchUsers() {
        const usersSaved = await this.repository.fetch();
        const listUsers = usersSaved.map(user => new listUser_dto_1.ListDTO(user.name, user.id));
        return listUsers;
    }
    async FetchData(id) {
        const userDataSaved = await this.repository.fetchById(id);
        console.log(userDataSaved);
        return userDataSaved;
    }
};
exports.UserController = UserController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createUser_dto_1.CreateUserDTO]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "insert", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(auth_guards_1.AuthGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "fetchUsers", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "FetchData", null);
exports.UserController = UserController = __decorate([
    (0, common_1.Controller)('/users'),
    __metadata("design:paramtypes", [user_repository_1.UserRepository])
], UserController);
//# sourceMappingURL=user.Controller.js.map