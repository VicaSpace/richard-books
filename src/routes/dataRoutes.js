const { Router } = require ('express')
const  { fetchData } = require ('../controllers/data.js')
const { logger } = require( '../middlewares/logger.js')

const router = Router()

router.post('/', logger, fetchData)

module.exports = {
  dataRouter: router
}