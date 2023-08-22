"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _express = require("express");
var _messagecontroller = require("../controllers/messagecontroller");
var _validate = _interopRequireDefault(require("../../util/validate"));
var router = (0, _express.Router)();
router.route('/sms').post(_validate["default"], _messagecontroller.createmessage);
module.exports = router;