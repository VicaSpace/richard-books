const db = require("../../models");
const { getAuthorsService } = require("../services/authorService");

const getAuthors = async (req, res) => {
  const authorDetails = await getAuthorsService();
  res.status(200).send(authorDetails);
}

module.exports = {
  getAuthors
}
