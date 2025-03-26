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
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsEmailUnique = exports.EmailUniqueValidator = void 0;
const class_validator_1 = require("class-validator");
const user_repository_1 = require("../repository/user.repository");
const common_1 = require("@nestjs/common");
let EmailUniqueValidator = class EmailUniqueValidator {
    constructor(repository) {
        this.repository = repository;
    }
    async validate(value, validationArguments) {
        const userExists = await this.repository.isEmailExists(value);
        return !userExists;
    }
};
exports.EmailUniqueValidator = EmailUniqueValidator;
exports.EmailUniqueValidator = EmailUniqueValidator = __decorate([
    (0, common_1.Injectable)(),
    (0, class_validator_1.ValidatorConstraint)({ async: true }),
    __metadata("design:paramtypes", [user_repository_1.UserRepository])
], EmailUniqueValidator);
const IsEmailUnique = (validationOptions) => {
    return (object, prop) => {
        (0, class_validator_1.registerDecorator)({
            target: object.constructor,
            propertyName: prop,
            options: validationOptions,
            constraints: [],
            validator: EmailUniqueValidator
        });
    };
};
exports.IsEmailUnique = IsEmailUnique;
//# sourceMappingURL=uniqueEmail.validator.js.map