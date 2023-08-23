const accountSid = 'YOUR_TWILIO_ACCOUNT_SID';
const authToken = 'YOUR_TWILIO_AUTH_TOKEN';

const client = require('twilio')(accountSid)(authToken);

const sendmessage = async (req, res) => {

sendTextMessage(req.body);
  res.status(200).json("message send ");
};

const sendTextMessage = (messageData)=>{
  console.log(messageData);
  client.messages.create({
    body: messagebody,
    from: sendernumber,
    to:  receiverNumber
    
  })
  .then(message=> console.console.log(message))
  .catch(error => console.log(error))
};



module.exports = { sendmessage };
