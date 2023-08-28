"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var twilio = require('twilio');
var client = new twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
var sendmessage = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          // console.log(process.env.TWILIO_ACCOUNT_SID,process.env.TWILIO_AUTH_TOKEN);
          sendTextMessage(req.body);
          res.status(200).json("message send ");
        case 2:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function sendmessage(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var sendTextMessage = function sendTextMessage(messageData) {
  // console.log(messageData);
  try {
    client.messages.create({
      body: messageData.messagebody,
      from: messageData.senderNumber,
      to: messageData.receiverNumber,
      statusCallback: process.env.TWILIO_STATUS_CALLBACK_URL
    }).then(function (message) {
      return console.log(message);
    })["catch"](function (error) {
      return console.log(error);
    });
  } catch (error) {
    console.log(error);
  }
};
var deliveryStatus = function deliveryStatus(req, res) {
  console.log(req.body);
};
module.exports = {
  sendmessage: sendmessage,
  deliveryStatus: deliveryStatus
};