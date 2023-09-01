import { Router } from 'express';
import AccountController from '../controller/accountController';

const router: Router = Router();
const accountController = new AccountController();

router.post('/create', accountController.createAccount);

router.get('/resolve/:accountNumber', accountController.getSingleAccount);

router.get('/retrieve', accountController.getAllAccount);




export default router;