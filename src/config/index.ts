import {Sequelize} from "sequelize"


export const db = new Sequelize("app","","",{
    storage:".mybank.sqlite",
    dialect:"sqlite",
    logging:false
})