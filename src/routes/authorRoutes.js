const { Router } = require ('express')
const  { getAuthors } = require ('../controllers/authors.js')
const { logger } = require( '../middlewares/logger.js')

const router = Router()

router.get('/', logger, getAuthors)

module.exports = {
  authorRouter: router
}