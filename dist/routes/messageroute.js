"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _express = require("express");
var _messagecontroller = require("../controllers/messagecontroller");
var _message = _interopRequireDefault(require("../validation/message.validation"));
var router = (0, _express.Router)();
router.route("/sms").post(_message["default"], _messagecontroller.sendmessage);
router.route('/sms/status').post(_messagecontroller.deliveryStatus);
// router.post('/sms/status',(req,res)=>{
//    console.log(req.body);
// })
module.exports = router;