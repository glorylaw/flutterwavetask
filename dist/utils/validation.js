"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.option = exports.Schema = void 0;
const joi_1 = __importDefault(require("joi"));
// Define the request validation schema using Joi
exports.Schema = joi_1.default.object({
    holderName: joi_1.default.string().trim().required(),
    dateOfBirth: joi_1.default.date().iso().required(),
    accountType: joi_1.default.string().trim().valid("Savings", "Current", "Checking"),
    initialBalance: joi_1.default.number().min(0).required(),
});
exports.option = {
    abortEarly: false,
    errors: {
        wrap: {
            label: ""
        }
    }
};
