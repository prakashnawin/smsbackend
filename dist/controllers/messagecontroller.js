"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var createmessage = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, messageMedium, sender, receiver, messagebody;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _req$body = req.body, messageMedium = _req$body.messageMedium, sender = _req$body.sender, receiver = _req$body.receiver, messagebody = _req$body.messagebody;
          try {
            if (messageMedium && sender && receiver && messagebody) {
              if (messageMedium !== "SMS" && messageMedium !== "whatsapp") res.json({
                message: "message Medium is invalid"
              });else {
                res.status(200).json({
                  message: "message send"
                });
              }
            } else {
              res.status(400).json({
                message: "all fields are requird"
              });
            }
          } catch (error) {
            console.log(error);
          }
        case 2:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function createmessage(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
module.exports = {
  createmessage: createmessage
};