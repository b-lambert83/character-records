const mongoose = require('mongoose');

//connect to mongo db
mongoose.connect('mongodb://localhost/characterRecord');
const db = mongoose.connection;

const characterSchema = new mongoose.Schema({ any: {}});

const CharModel = mongoose.model('character', characterSchema);

db.once('open', () => {
  console.log('Connection to DB open.');
}).on('error', (error) => {
  console.log('Connection failed: ', error);
});

module.exports = {db, characterSchema, CharModel};