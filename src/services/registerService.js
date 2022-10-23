const db = require('../../models');

const registerService = async (user) => db.Users.create(user);

module.exports = {
  registerService,
};
