import path from 'path';
import logger from 'morgan';
import express from 'express';
import createError from 'http-errors';
import Config from './configs/config';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import { connectDb } from './util/database_connection';
dotenv.config();
// import indexRouter from './routes/index';
import messageRouter from './routes/messageroute';
connectDb();
var app = express();

// view engine setup
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

// app.use('/', indexRouter);
app.use('/api', messageRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
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
var server = app.listen(Config.port, () => console.log(`Listening on port ${Config.port}`));
export default app;