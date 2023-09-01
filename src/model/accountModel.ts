import { DataTypes, Model } from 'sequelize';
import { db } from "../config";
import { v4 as uuidv4 } from 'uuid';

export class Account extends Model {
    id!: string;
    accountNumber!: string;
    holderName!: string;
    dateOfBirth!: string; 
    accountType!: string;
    initialBalance!: number;
  }

  Account.init(
        {
        id: {
            type: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull:false,
            defaultValue: () => uuidv4(), 
        },
        accountNumber: {
            type: DataTypes.NUMBER, 
            unique: true,
        },
        holderName:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        dateOfBirth:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        accountType:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        initialBalance:{
            type:DataTypes.NUMBER,
            allowNull:false,
        },
        
        },
        {
        sequelize:db,
        modelName: 'Account',
        }
    );