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

  res.status(201).send(bookDetails);
});

app.post("/api/register", async (req, res) => {
  let user = req.body;
  user = await db.Users.create(user);
  res.status(201).send()
})

app.get("/api/books", async (_req, res) => {
  const bookDetails = await db.Books.findAll();
  res.status(200);
  res.send(bookDetails);
});

app.get("/api/authors", async (_req, res) => {
  const authorDetails = await db.Authors.findAll();
  res.status(200).send(authorDetails);
});

app.patch("/api/books/:bookId", async (req, res) => {
  const { username, rating } = req.body;
  const userList = await db.Users.findAll({
    where: {
      'username': username,
    }
  });
  if (userList.length !== 1) {
    return res.status(400).send("Error");
  }
  const userId = userList[0].id;
  await db.Ratings.create({'userId': userId, 'bookId': req.params.bookId, 'rating': rating});
  res.status(204).send();
});

app.get("/api/books/:bookId/rating", async (req, res) => {
  const ratings = await db.Ratings.findAll({
    where: {
      'bookId': req.params.bookId
    }
  })
  if (ratings.length === 0) {
    return res.contentType('application/json').send(JSON.stringify({
      "rating": 0
    }));
  }
  const averageRating = ratings.reduce((acc, iter) => acc + iter.rating, 0) / ratings.length;
  res.contentType('application/json').send(JSON.stringify({
    "rating": averageRating
  }));
})
