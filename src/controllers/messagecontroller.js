const twilio = require('twilio')
const client = new twilio(process.env.TWILIO_ACCOUNT_SID,process.env.TWILIO_AUTH_TOKEN);

const sendmessage = async (req, res) => {
// console.log(process.env.TWILIO_ACCOUNT_SID,process.env.TWILIO_AUTH_TOKEN);
sendTextMessage(req.body);
  res.status(200).json("message send ");
};

const sendTextMessage = (messageData)=>{

  // console.log(messageData);
  try {
    client.messages.create({
      body: messageData.messagebody,
      from: messageData.senderNumber,
      to:  messageData.receiverNumber,
      statusCallback:process.env.TWILIO_STATUS_CALLBACK_URL
    })
    .then(message=> console.log(message))
    .catch(error => console.log(error))
  } catch (error) {
    console.log(error);
  }
  
};


module.exports = { sendmessage };
