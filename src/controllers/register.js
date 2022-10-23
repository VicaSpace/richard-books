const { registerService } = require('../services/registerService');

const register = async (req, res) => {
  const user = await registerService(req.body);
  res.status(201).send(user);
};

module.exports = {
  register,
};
