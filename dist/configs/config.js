"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _dotenv = _interopRequireDefault(require("dotenv"));
_dotenv["default"].config();
var _default = {
  port: process.env.NODE_ENV === 'test' ? process.env.TEST_APP_PORT : process.env.PORT || 7005
};
exports["default"] = _default;