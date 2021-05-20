const express = require ('express');
const db = require('../db/index.js');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('./client/dist'));

app.get(/)

app.listen(port, () => {
  console.log(`Record Manager listening on port ${port}!`)
});
