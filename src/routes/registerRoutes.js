const { Router } = require ('express')
const  { register } = require ('../controllers/register.js')
const { logger } = require( '../middlewares/logger.js')

const router = Router()

router.post('/', logger, register)

module.exports = {
  registerRouter: router
}