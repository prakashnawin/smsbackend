import { Router } from "express";
import { sendmessage,deliveryStatus } from "../controllers/messagecontroller";
import validation from "../validation/message.validation";
import { sms_client_numbers,sms_clients,providers } from "../util/database_connection";
const router = Router();

router.route("/sms").post(validation, sendmessage);

router.route('/sms/status').post(deliveryStatus);
// router.post('/sms/a4', async(req,res)=>{
//     const back_data = await sms_client_numbers.find();
    
//     const nexr = await sms_clients.find({"_id":back_data[0].client})
//     const pro = await providers.find({"_id":nexr[0].sms_client_providers})
//     res.status(200).json(pro);

// });


module.exports = router;
