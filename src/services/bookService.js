const db = require('../../models')

const getBooksService = async () => {
  return await db.Books.findAll();
}

const rateABookService = async (username, rating, bookId) => {
  const userList = await db.Users.findAll({
    where: {
      'username': username,
    }
  });
  if (userList.length !== 1) {
    return res.status(400).send("Error");
  }
  const userId = userList[0].id;
  await db.Ratings.create({'userId': userId, 'bookId': bookId, 'rating': rating});
}

const getABookRatingService = async (bookId) => {
  const ratings = await db.Ratings.findAll({
    where: {
      'bookId': bookId
    }
  })
  if (ratings.length === 0) {
    return 0;
  }
  return ratings.reduce((acc, iter) => acc + iter.rating, 0) / ratings.length;
}

module.exports = {
  getBooksService,
  rateABookService,
  getABookRatingService
}
