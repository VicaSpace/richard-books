const { Router } = require ('express')
const  { getBooks, rateABook, getABookRating } = require ('../controllers/books.js')
const { logger } = require( '../middlewares/logger.js')

const router = Router()

router.get('/', logger, getBooks)
router.patch('/:bookId', logger, rateABook)
router.get('/:bookId/rating', logger, getABookRating)

module.exports = {
  bookRouter: router
}