"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _path = _interopRequireDefault(require("path"));
var _morgan = _interopRequireDefault(require("morgan"));
var _express = _interopRequireDefault(require("express"));
var _httpErrors = _interopRequireDefault(require("http-errors"));
var _config = _interopRequireDefault(require("./configs/config"));
var _cookieParser = _interopRequireDefault(require("cookie-parser"));
var _index = _interopRequireDefault(require("./routes/index"));
var _messageroute = _interopRequireDefault(require("./routes/messageroute"));
var app = (0, _express["default"])();

// view engine setup
app.set('views', _path["default"].join(__dirname, './views'));
app.set('view engine', 'ejs');
app.use((0, _morgan["default"])('dev'));
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
}));
app.use((0, _cookieParser["default"])());
app.use(_express["default"]["static"](_path["default"].join(__dirname, '../public')));
app.use('/', _index["default"]);
app.use('/api', _messageroute["default"]);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next((0, _httpErrors["default"])(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
var server = app.listen(_config["default"].port, function () {
  return console.log("Listening on port ".concat(_config["default"].port));
});
var _default = app;
exports["default"] = _default;