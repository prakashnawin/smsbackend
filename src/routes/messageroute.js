import { Router } from 'express';
import { createmessage } from '../controllers/messagecontroller';
const router = Router();


router.route('/sms').post(createmessage);

module.exports = router;