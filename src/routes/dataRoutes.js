const { Router } = require('express');
const { fetchData } = require('../controllers/data');
const { logger } = require('../middlewares/logger');

const router = Router();

router.post('/', logger, fetchData);

module.exports = {
  dataRouter: router,
};
