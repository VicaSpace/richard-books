const db = require('../../models')

const getAuthorsService = async () => {
  return await db.Authors.findAll();
}

module.exports = {
  getAuthorsService
};
