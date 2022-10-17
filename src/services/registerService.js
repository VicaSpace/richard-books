const db = require('../../models')

const registerService = async (user) => {
  return await db.Users.create(user);
}

module.exports = {
  registerService
};
