import express from "express";
import logger from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors"
import accountRoutes from './route/accountRoute';
import {URL, port,db} from './config'
import dotenv from 'dotenv';
dotenv.config();


db.sync().then(()=>{
    console.log("db connected successfully")
}).catch(err=>{
    console.log(err)
})



const app = express();
app.use(express.json())
app.use(logger("dev"))
app.use(cookieParser())
app.use(cors())

app.use('/', accountRoutes);



app.listen(port, ()=>{
    console.log(`Server running on ${URL}:${port}`)
})