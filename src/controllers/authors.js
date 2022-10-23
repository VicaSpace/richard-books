const { getAuthorsService } = require('../services/authorService');

const getAuthors = async (_req, res) => {
  const authorDetails = await getAuthorsService();
  res.status(200).send(authorDetails);
};

module.exports = {
  getAuthors,
};
