"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const account_1 = require("../model/account");
const chance_1 = __importDefault(require("chance"));
const validation_1 = require("../middleware/validation");
class AccountController {
    createAccount(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { holderName, dateOfBirth, accountType, initialBalance } = req.body;
                const chance = new chance_1.default();
                const accountNo = chance.natural({ min: 3000000000, max: 3099999999 });
                //   if ( initialBalance < 0 ) {
                //     return res.status(400).json({ error: 'Invalid input' });
                //   }
                const validateResult = validation_1.Schema.validate(req.body, validation_1.option);
                if (validateResult.error) {
                    return res.status(400).json({
                        Error: validateResult.error.details[0].message,
                    });
                }
                const newAccount = yield account_1.Account.create({
                    holderName,
                    dateOfBirth,
                    accountType,
                    initialBalance,
                    accountNumber: accountNo
                });
                res.status(201).json({
                    message: 'Account created successfully',
                    accountInfo: {
                        accountNumber: newAccount.accountNumber,
                        holderName: newAccount.holderName,
                        dateOfBirth: newAccount.dateOfBirth,
                        accountType: newAccount.accountType,
                        initialBalance: newAccount.initialBalance,
                    },
                });
            }
            catch (error) {
                res.status(400).json({ error: error.message });
            }
        });
    }
}
exports.default = AccountController;
