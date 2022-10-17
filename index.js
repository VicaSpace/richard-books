const axios = require("axios");
const db = require('./models');
const express = require("express");

const app = express();
const port = 3001;

app.use(express.json())

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});

app.post("/api/data", async (_req, res) => {
  const books = await axios('http://3.95.158.224:3000/api/books');
  const authorIds = new Set();
  const bookDetails = [];
  const authorDetails = [];

  for (let i = 0; i < books.data.length; ++i) {
    const bookDetail = await axios(`http://3.95.158.224:3000/api/book/${books.data[i].id}`)
    bookDetails.push({ 'name': books.data[i].name, ...bookDetail.data })
    authorIds.add(bookDetail.data.authorId);
  }

  for (let authorId of authorIds) {
    const authorDetail = await axios(`http://3.95.158.224:3000/api/book/author/${authorId}`)
    authorDetails.push(authorDetail.data);
  }

  db.Books.bulkCreate(bookDetails);
  db.Authors.bulkCreate(authorDetails);

  res.status(201);
  res.send(bookDetails);
});