import { Router,Request, Response } from 'express';
import AccountController from '../controller/accountController';


const router: Router = Router();
const accountController = new AccountController();

router.get("/", (req:Request,res:Response)=>{
    res.status(200).send("App is currectly running")

})
router.post('/create', accountController.createAccount);

router.get('/resolve/:accountNumber', accountController.getSingleAccount);

router.get('/retrieve', accountController.getAllAccount);




export default router;