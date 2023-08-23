import { Router } from "express";
import { sendmessage } from "../controllers/messagecontroller";
import validation from "../validation/message.validation";
const router = Router();

router.route("/sms").post(validation, sendmessage);

module.exports = router;
