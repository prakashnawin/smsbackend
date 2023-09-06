import {
  sms_client_numbers,
  providers,
  sms_clients,
} from "../util/database_connection";
import { sendTextMessage } from "./provider_controller";


const sendmessage = async (req, res) => {
  if (req.body.messageMedium === "sms") {
    const clientNumber = await sms_client_numbers.findOne({
      number: req.body.senderNumber,
    });
    const client = await sms_clients.findOne({ _id: clientNumber.client });
    const provider = await providers.findOne({
      _id: clientNumber.provider,
    });
   const data = {
      sid: clientNumber.sid,
      token: clientNumber.token,
      sms_client_delivery_url: client.sms_client_delivery_url,
      sms_client_incoming_url: client.sms_client_incoming_url,
      provider_name: provider.provider_name,
    };

    sendTextMessage(data, req.body);
  } else if (req.body.messageMedium === "whatsapp")
    console.log("hello Whatsapp");

  // sendTextMessage(sender_number?.sid, sender_number?.token, req.body);
  // res.status(200).json(sender_number);
};

const deliveryStatus = async(req, res, next) => {
  
  
  const clientNumber = await sms_client_numbers.findOne({
    number: req.body.From,
  });
  const client = await sms_clients.findOne({ _id: clientNumber.client });
  // console.log(client.sms_client_delivery_url);
  
  axios
  .post(client.sms_client_delivery_url, req.body)
  .then((response) => {
    console.log("Response from server:", response.data);
  })
  .catch((error) => {
    console.error("Error sending request:", error);
  });
  
};

module.exports = { sendmessage, deliveryStatus };
