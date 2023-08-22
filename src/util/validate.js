// const Joi = require("joi");
import Joi from "joi";
const smsResponseSchema = Joi.object({
    // Define validation rules for the SMS response properties
    // For example:
    messageMedium: Joi.string().valid('whatsapp','sms').required(),
    sender: Joi.string().required(),
    receiver: Joi.string().required(),
    messagebody: Joi.string().required()
  });

const  validation = (req,res,next)=>{
        const {error} =smsResponseSchema.validate(req.body);
       
    if(error){
      console.log("hello")
      
      return res.status(400).json({ error: error.details[0].message})
  
  }
    
next();

  };
module.exports = validation;