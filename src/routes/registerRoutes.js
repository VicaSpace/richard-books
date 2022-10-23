const { Router } = require('express');
const { register } = require('../controllers/register');
const { logger } = require('../middlewares/logger');

const router = Router();

router.post('/', logger, register);

module.exports = {
  registerRouter: router,
};
