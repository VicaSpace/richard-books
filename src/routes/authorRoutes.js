const { Router } = require('express');
const { getAuthors } = require('../controllers/authors');
const { logger } = require('../middlewares/logger');

const router = Router();

router.get('/', logger, getAuthors);

module.exports = {
  authorRouter: router,
};
