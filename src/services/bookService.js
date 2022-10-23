const db = require('../../models');

const getBooksService = async () => db.Books.findAll({ include: db.Authors });

const rateABookService = async (username, rating, bookId) => {
  const userList = await db.Users.findAll({
    where: {
      username,
    },
  });
  if (userList.length !== 1) {
    throw new Error();
  }
  const userId = userList[0].id;
  await db.Ratings.create({ userId, bookId, rating });
};

const getABookRatingService = async (bookId) => {
  const ratings = await db.Ratings.findAll({
    where: {
      bookId,
    },
  });
  if (ratings.length === 0) {
    return 0;
  }
  return ratings.reduce((acc, iter) => acc + iter.rating, 0) / ratings.length;
};

module.exports = {
  getBooksService,
  rateABookService,
  getABookRatingService,
};
