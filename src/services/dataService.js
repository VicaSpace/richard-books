/* eslint-disable no-restricted-syntax */
/* eslint-disable no-plusplus */
/* eslint-disable no-await-in-loop */
const axios = require('axios');
const db = require('../../models');

const fetchDataService = async () => {
  const books = await axios('http://3.95.158.224:3000/api/books');
  const authorIds = new Set();
  const bookDetails = [];
  const authorDetails = [];

  for (let i = 0; i < books.data.length; ++i) {
    const bookDetail = await axios(`http://3.95.158.224:3000/api/book/${books.data[i].id}`);
    bookDetails.push({ name: books.data[i].name, img: books.data[i].img, ...bookDetail.data });
    authorIds.add(bookDetail.data.authorId);
  }

  for (const authorId of authorIds) {
    const authorDetail = await axios(`http://3.95.158.224:3000/api/book/author/${authorId}`);
    authorDetails.push(authorDetail.data);
  }

  db.Books.bulkCreate(bookDetails);
  db.Authors.bulkCreate(authorDetails);
  return bookDetails;
};

module.exports = {
  fetchDataService,
};
