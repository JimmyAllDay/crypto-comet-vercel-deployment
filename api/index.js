const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config('/api/.env');

const port = process.env.PORT;

//Routes modules
const news = require('../routes/news.js');
const coins = require('../routes/coins.js');
const trending = require('../routes/trending.js');
const favs = require('../routes/fav.js');

// const path = __dirname + '/client/build';

app.use(cors());
// app.use(express.static(path));

app.use('/api/news', news);

app.use('/api/coins', coins);

app.use('/api/trending', trending);

app.use('/api/fav', favs);

// app.get('/', function (req, res) {
//   res.sendFile(path + 'index.html');
// });

if (port) {
  app.listen(port, () => console.log(`Listening on port ${port}`));
}

module.exports = app;
