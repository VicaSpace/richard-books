const express = require('express');
const { router } = require('./src/routes');

const app = express();
const port = 3001;

app.use(express.json());

app.use('/api', router);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
