"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
const sequelize_1 = require("sequelize");
const config_1 = require("../config");
const uuid_1 = require("uuid");
class Account extends sequelize_1.Model {
}
exports.Account = Account;
Account.init({
    id: {
        type: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
        defaultValue: () => (0, uuid_1.v4)(),
    },
    accountNumber: {
        type: sequelize_1.DataTypes.NUMBER,
        unique: true,
    },
    holderName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    dateOfBirth: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    accountType: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    initialBalance: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: false,
    },
}, {
    sequelize: config_1.db,
    modelName: 'Account',
});
