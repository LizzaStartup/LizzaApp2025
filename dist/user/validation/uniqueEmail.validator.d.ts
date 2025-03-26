import { ValidationArguments, ValidationOptions, ValidatorConstraintInterface } from "class-validator";
import { UserRepository } from "../repository/user.repository";
export declare class EmailUniqueValidator implements ValidatorConstraintInterface {
    private repository;
    constructor(repository: UserRepository);
    validate(value: any, validationArguments?: ValidationArguments): Promise<boolean>;
}
export declare const IsEmailUnique: (validationOptions: ValidationOptions) => (object: Object, prop: string) => void;
