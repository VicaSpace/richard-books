const { Router } = require('express');
const { getBooks, rateABook, getABookRating } = require('../controllers/books');
const { logger } = require('../middlewares/logger');

const router = Router();

router.get('/', logger, getBooks);
router.patch('/:bookId', logger, rateABook);
router.get('/:bookId/rating', logger, getABookRating);

module.exports = {
  bookRouter: router,
};
