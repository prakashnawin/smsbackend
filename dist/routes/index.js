"use strict";

var _express = require("express");
/**
 * Contains all API routes for the application.
 */

var router = (0, _express.Router)();
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});
module.exports = router;