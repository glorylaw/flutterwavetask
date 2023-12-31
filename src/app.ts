import express from "express";
import logger from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors"
import{db} from "./config"
import accountRoutes from './route/accountRoute';



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



const port = 7000

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});