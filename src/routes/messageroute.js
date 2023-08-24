import { Router } from "express";
import { sendmessage } from "../controllers/messagecontroller";
import validation from "../validation/message.validation";
const router = Router();

router.route("/sms").post(validation, sendmessage);
router.post('/sms/status',(req,res)=>{
   console.log(req.body);
})
module.exports = router;
