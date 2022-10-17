const db = require("../../models");
const { getBooksService, rateABookService, getABookRatingService } = require("../services/bookService");

const getBooks = async (req, res) => {
  const bookDetails = await getBooksService();
  res.status(200).send(bookDetails);
}

const rateABook = async (req, res) => {
  const { username, rating } = req.body;
  await rateABookService(username, rating, req.params.bookId);
  res.status(204).send();
}

const getABookRating = async (req, res) => {
  const averageRating = await getABookRatingService(req.params.bookId);
  res.contentType('application/json').send(JSON.stringify({
    "rating": averageRating
  }));
}

module.exports= {
  getBooks,
  rateABook,
  getABookRating
}
