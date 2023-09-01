"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.URL = exports.port = exports.db = void 0;
const sequelize_1 = require("sequelize");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.db = new sequelize_1.Sequelize("app", "", "", {
    storage: ".mybank.sqlite",
    dialect: "sqlite",
    logging: false
});
exports.port = process.env.PORT || 7000;
exports.URL = process.env.URL;
