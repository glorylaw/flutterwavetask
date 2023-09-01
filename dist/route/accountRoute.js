"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const accountController_1 = __importDefault(require("../controller/accountController"));
const router = (0, express_1.Router)();
const accountController = new accountController_1.default();
router.post('/create', accountController.createAccount);
router.get('/resolve/:accountNumber', accountController.getSingleAccount);
router.get('/retrieve', accountController.getAllAccount);
exports.default = router;
