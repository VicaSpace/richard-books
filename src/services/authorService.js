const db = require('../../models');

const getAuthorsService = async () => db.Authors.findAll();

module.exports = {
  getAuthorsService,
};
