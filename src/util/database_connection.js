
const mongoose = require('mongoose');

const url = process.env.Mongo_URL;

const connectDb = async () => {
  try {
    const connect = await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('database connected');
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};


const sms_clients_Schema = mongoose.Schema(
    {
        sms_client_firstname: {
        type: String,
          required: true,
      },
      sms_client_lastname: {
        type: String,
          required: true,
      },
      sms_client_email: {
        type: String,
          required: true,
      },
      sms_client_delivery_url: {
        type: String,
        required: true,
      },
      sms_client_incoming_url: {
        type: String,
        required: true,
      },
      
      sms_client_providers:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"providers",
        required:true,
      },

      
    }

  );
  const sms_clients = mongoose.model('sms_clients', sms_clients_Schema);
  
  const providers_Schema = mongoose.Schema({
    provider_name: {
      type: String,
      required: true,
    },
    provider_code: {
      type: String,
      required: true,
    },
   
 } );
  
  const providers = mongoose.model('providers', providers_Schema);

  const sms_client_numbers_Schema = mongoose.Schema(
    {
        number: {
        type: String,
        required: true,
      },
      sid: {
        type: String,
        required: true,
      },
      token: {
        type: String,
        required: true,
      },
      provider:{
        type :mongoose.Schema.Types.ObjectId,
        ref:"providers",
        required:true,
      },
      client:{
        type :mongoose.Schema.Types.ObjectId,
        ref:"sms_clients",
        required:true,
      },
     } );
  
  const sms_client_numbers = mongoose.model('sms_client_numbers', sms_client_numbers_Schema);
  
  module.exports = { connectDb, sms_clients, providers, sms_client_numbers };

