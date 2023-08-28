const twilio = require('twilio')
import { sms_client_numbers,providers,sms_clients } from '../util/database_connection';

// const client = new twilio(process.env.TWILIO_ACCOUNT_SID,process.env.TWILIO_AUTH_TOKEN)

const sendmessage = async (req, res) => {
console.log(req.body.senderNumber);
const sender_number = await sms_client_numbers.find({"number":req.body.senderNumber});
sendTextMessage(sender_number[0].sid,sender_number[0].token,req.body);

// const providerId = await sms_clients.find({"_id":sender_number[0].client});
// const provider = await providers.find({"_id":providerId[0].sms_client_providers})

  res.status(200).json("message send");

};

const sendTextMessage = (sid,token,messageData)=>{
const client = new twilio(sid,token)
  // console.log(messageData);
  try {
    client.messages.create({
      body: messageData.messagebody,
      from: messageData.senderNumber,
      to:  messageData.receiverNumber,
      // statusCallback:process.env.TWILIO_STATUS_CALLBACK_URL
    })
    .then(message=> console.log(message))
    .catch(error => console.log(error))
  } catch (error) {
    console.log(error);
  }
  
};

const deliveryStatus =(req,res)=>{
  console.log(req.body);
    res.status(500).json(req.body);
}


module.exports = { sendmessage,deliveryStatus };


// UFAiYRTbHvj2ezPH