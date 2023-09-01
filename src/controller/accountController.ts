import { Request, Response , NextFunction} from 'express';
import { Account } from '../model/accountModel';
import Chance from 'chance';
import {Schema,option}from '../middleware/validation';


class AccountController {

  async createAccount(req: Request, res: Response): Promise< void | {}> {
    try {

      const { holderName, dateOfBirth, accountType, initialBalance } = req.body;
      const chance = new Chance()
      const accountNo = chance.natural({min: 3000000000, max: 3099999999})
      // const integerAccountNumber = Math.floor(accountNo);

      const validateResult = Schema.validate(req.body, option);

      if (validateResult.error) {
        return res.status(400).json({
          Error: validateResult.error.details[0].message,
        });
      }

      const newAccount = await Account.create({
        holderName,
        dateOfBirth,
        accountType,
        initialBalance,
        accountNumber:accountNo
      });

      res.status(201).json({
        message: 'Account created successfully',
        accountInfo: {
          accountNumber: newAccount.accountNumber,
          holderName: newAccount.holderName,
          dateOfBirth: newAccount.dateOfBirth, 
          accountType: newAccount.accountType,
          initialBalance: newAccount.initialBalance,
        },
      });
    } catch (error:any) {
      res.status(400).json({ error: error.message });
    }
  }


  async getSingleAccount(req: Request, res: Response) : Promise< void | {}>{
    try {
      const { accountNumber } = req.params;
     
      // Find the account by accountNumber
      const account = await Account.findOne({ where: { accountNumber:accountNumber} });

      if (!account) {
        return res.status(404).json({ error: 'Account not found' });
      }

      res.status(200).json({
        message: 'Account resolved successfully',
        bankDetails: account
        
      });
    } catch (error:any) {
      res.status(404).json({ error: error.message });
    }
  }


    async getAllAccount(req: Request, res: Response): Promise< void | {}> {
      try {
        const limit = req.query.limit as number | undefined
        const users = await Account.findAndCountAll({
          limit:limit
        })
        
      return res.status(200).json({
        message:"You have successfully retrieved all users",
        Count:users.count,
        Users:users.rows
      })

      } catch (error:any) {
        res.status(400).json({ error: error.message });
      }
        

    }


}

export default AccountController;
