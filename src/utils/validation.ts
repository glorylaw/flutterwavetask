    import Joi from 'joi';

        // Define the request validation schema using Joi
        export const Schema = Joi.object({
            holderName: Joi.string().trim().required(),
            dateOfBirth: Joi.date().iso().required(), 
            accountType: Joi.string().trim().valid("Savings","Current","Checking"),
            initialBalance: Joi.number().min(0).required(),
        });

        export const option = {
            abortEarly:false,
            errors:{
                wrap:{
                    label:""
                }
            }
        }

 
  