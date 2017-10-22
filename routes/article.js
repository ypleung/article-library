var express = require('express');
var router = express.Router();

// Require our controllers
var article_controller = require('../controllers/articleController');

// ARTICLE ROUTES
/* GET request to find Article. */
router.get('/', article_controller.article_list);

/* GET request to find Article. */
router.get('/:term', article_controller.article_list);

module.exports = router;
