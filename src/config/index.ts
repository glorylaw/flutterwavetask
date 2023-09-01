import {Sequelize} from "sequelize"
import dotenv from 'dotenv';
dotenv.config();

export const db = new Sequelize("app","","",{
    storage:".mybank.sqlite",
    dialect:"sqlite",
    logging:false
})

export const port = process.env.PORT || 7000;

export const URL = process.env.URL as string;