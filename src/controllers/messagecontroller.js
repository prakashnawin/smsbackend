import { sendTextMessage } from "../util/provider";
import {
  sms_client_numbers,
  providers,
  sms_clients,
} from "../util/database_connection";

const sendmessage = async (req, res) => {
  if (req.body.messageMedium === "sms") {
    const clientNumber = await sms_client_numbers.findOne({
      number: req.body.senderNumber,
    });
    const client = await sms_clients.findOne({ _id: clientNumber.client });
    const provider = await providers.findOne({
      _id: client.sms_client_providers,
    });
    const data = {
      sid: clientNumber.sid,
      token: clientNumber.token,
      sms_client_delivery_url: client.sms_client_delivery_url,
      sms_client_incoming_url: client.sms_client_incoming_url,
      provider_name: provider.provider_name,
    };

    sendTextMessage(data, req.body);
  } else if (req.body.messageMedium === "whatsapp") console.log("hello");

  // sendTextMessage(sender_number?.sid, sender_number?.token, req.body);

  // res.status(200).json(sender_number);
};

const deliveryStatus = (req, res) => {
  console.log(req.body);
  res.status(200).json(req.body);
};

module.exports = { sendmessage, deliveryStatus };
