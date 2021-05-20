const express = require ('express');
const {db, characterSchema, CharModel }= require('../db/index.js');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('./client/dist'));

// app.get('/')
app.post('/save', async(req, res) => {
  // console.log(req.body);
  const post = new CharModel(req.body);
  try {
    const newChar = await post.save();
    res.sendStatus(201);
  } catch (err) {
    res.sensStatus(400).json({message: err.message});
  }
})

app.get('/get', async (req, res) => {
  try {
    const CharModel = await CharModel.find();
    res.json(CharModel)
  } catch (err) {
    res.status(500).json({message: err.message})
  }
})

app.listen(port, () => {
  console.log(`Record Manager listening on port ${port}!`)
});
