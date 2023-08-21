import { Router } from 'express';

/**
 * Contains all API routes for the application.
 */

const router = Router();

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;