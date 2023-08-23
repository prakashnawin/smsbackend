const twilio = require('twilio')
const client = new twilio(process.env.TWILIO_ACCOUNT_SID,process.env.TWILIO_AUTH_TOKEN);

const sendmessage = async (req, res) => {

sendTextMessage(req.body);
  res.status(200).json("message send ");
};

const sendTextMessage = (messageData)=>{

  console.log(messageData);
  client.messages.create({
    body: messagebody,
    from: senderNumber,
    to:  receiverNumber
    
  })
  .then(message=> console.console.log(message))
  .catch(error => console.log(error))
};



module.exports = { sendmessage };
