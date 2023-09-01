import twilio from "twilio";

const twilioSendTextMessage = (providerData, messageData) => {
  
    const client = new twilio(providerData?.sid, providerData?.token);
    try {
      client.messages
        .create({
          body: messageData?.messagebody,
          from: messageData?.senderNumber,
          to: messageData?.receiverNumber,
          statusCallback: process.env.STATUS_CALLBACK_URL,
        })
        .then((message) => console.log(message))
        .catch((error) => console.log(error));
    } catch (error) {
      console.log(error);
    }
};

module.exports = {
    twilioSendTextMessage,
};
