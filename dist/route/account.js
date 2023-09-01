"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const account_1 = __importDefault(require("../controller/account"));
const router = (0, express_1.Router)();
const accountController = new account_1.default();
router.post('/create', accountController.createAccount);
exports.default = router;
