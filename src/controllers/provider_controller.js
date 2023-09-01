import { arrayLinkSendTextMessage } from "../providers/arrayLinkcontroller";
import { twilioSendTextMessage } from "../providers/twiliocontroller";

const sendTextMessage = (providerData, messageData) => {
  switch (providerData.provider_name) {
    case "twilio":
      console.log("Twilio function is called");
      twilioSendTextMessage(providerData, messageData);
      break;
    case "array_link":
      console.log("array link function will called");
      arrayLinkSendTextMessage(providerData, messageData);
      break;
    default:
      break;
  }
};

module.exports = {
  sendTextMessage,
};
