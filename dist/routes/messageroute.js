"use strict";

var _express = require("express");
var _messagecontroller = require("../controllers/messagecontroller");
var router = (0, _express.Router)();
router.route('/sms').post(_messagecontroller.createmessage);
module.exports = router;