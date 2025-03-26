"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const auth_Controller_1 = require("./controllers/auth.Controller");
const auth_repository_1 = require("./repository/auth.repository");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("../user/entity/user.entity");
const jwt_1 = require("@nestjs/jwt");
const auth_guards_1 = require("./guards/auth.guards");
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([user_entity_1.UserEntity]),
            jwt_1.JwtModule.register({
                secret: 'lizzaStartup',
                signOptions: { expiresIn: '1h' }
            })
        ],
        controllers: [auth_Controller_1.AuthController],
        providers: [auth_repository_1.AuthRepository, auth_guards_1.AuthGuard],
        exports: [auth_guards_1.AuthGuard, jwt_1.JwtModule]
    })
], AuthModule);
//# sourceMappingURL=auth.module.js.map