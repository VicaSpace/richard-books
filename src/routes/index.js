const { Router } = require ('express')
const  { bookRouter } = require ('./bookRoutes')
const { authorRouter } = require('./authorRoutes')
const { registerRouter } = require('./registerRoutes')
const { dataRouter } = require('./dataRoutes')

const router = Router()

router.use('/books', bookRouter)
router.use('/authors', authorRouter)
router.use('/register', registerRouter)
router.use('/data', dataRouter)

module.exports = {
  router
}
