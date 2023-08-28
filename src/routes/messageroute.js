import { Router } from "express";
import { sendmessage,deliveryStatus } from "../controllers/messagecontroller";
import validation from "../validation/message.validation";
const router = Router();

router.route("/sms").post(validation, sendmessage);

router.route('/sms/status').post(deliveryStatus);

module.exports = router;
