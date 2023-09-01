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
const accountModel_1 = require("../model/accountModel");
const chance_1 = __importDefault(require("chance"));
const validation_1 = require("../middleware/validation");
class AccountController {
    createAccount(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { holderName, dateOfBirth, accountType, initialBalance } = req.body;
                const chance = new chance_1.default();
                const accountNo = chance.natural({ min: 3000000000, max: 3099999999 });
                // const integerAccountNumber = Math.floor(accountNo);
                const validateResult = validation_1.Schema.validate(req.body, validation_1.option);
                if (validateResult.error) {
                    return res.status(400).json({
                        Error: validateResult.error.details[0].message,
                    });
                }
                const newAccount = yield accountModel_1.Account.create({
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
    getSingleAccount(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { accountNumber } = req.params;
                // Find the account by accountNumber
                const account = yield accountModel_1.Account.findOne({ where: { accountNumber: accountNumber } });
                if (!account) {
                    return res.status(404).json({ error: 'Account not found' });
                }
                res.status(200).json({
                    message: 'Account resolved successfully',
                    bankDetails: account
                });
            }
            catch (error) {
                res.status(404).json({ error: error.message });
            }
        });
    }
    getAllAccount(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const limit = req.query.limit;
                const users = yield accountModel_1.Account.findAndCountAll({
                    limit: limit
                });
                return res.status(200).json({
                    message: "You have successfully retrieved all users",
                    Count: users.count,
                    Users: users.rows
                });
            }
            catch (error) {
                res.status(400).json({ error: error.message });
            }
        });
    }
}
exports.default = AccountController;
