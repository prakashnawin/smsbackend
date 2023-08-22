import { Router } from 'express';
import { createmessage } from '../controllers/messagecontroller';
import validation from '../util/validate';
const router = Router();


router.route('/sms').post(validation,createmessage);

module.exports = router;