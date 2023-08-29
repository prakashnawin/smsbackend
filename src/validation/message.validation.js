import Joi from "joi";
const smsResponseSchema = Joi.object({
  // Define validation rules for the SMS response properties

  messageMedium: Joi.string().valid("whatsapp", "sms").required(),
  senderNumber: Joi.string().required(),
  receiverNumber: Joi.string().required(),
  messagebody: Joi.string().required(),
});

const validation = (req, res, next) => {
  const { error } = smsResponseSchema.validate(req.body);
  if (error) {
    
    return res.status(400).json({ error: error.details[0].message });
  }

  next();
};
module.exports = validation;
