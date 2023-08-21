import { Router } from 'express';
const router = Router();


router.route('/').post(createmessage);

module.exports = router;