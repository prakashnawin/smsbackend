import twilio from "twilio";

const sendTextMessage = (providerData, messageData) => {
  // console.log(providerData);
  // console.log(messageData);
  if (providerData.provider_name === "twilio") {
    const client = new twilio(providerData.sid, providerData.token);
    try {
      client.messages
        .create({
          body: messageData.messagebody,
          from: messageData.senderNumber,
          to: messageData.receiverNumber,
          statusCallback: process.env.TWILIO_STATUS_CALLBACK_URL,
        })
        .then((message) => console.log(message))
        .catch((error) => console.log(error));
    } catch (error) {
      console.log(error);
    }
  }
  if (providerData.provider_name === "arrayLink") {
  }
};

module.exports = {
  sendTextMessage,
};
