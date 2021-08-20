const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Pet = Schema({
  Organization: {
    Name: String,
    Address: {
      City: String,
      Street: String,
      Avenue: String,
      Lat: String,
      Lon: String
    },
  },
  PetName: String,
  Age: Number,
  Description: String,
  Images: [{
    image: String
  }],
  meta: {
    DateCreated: String
  }
});


module.exports = mongoose.model('Pets', Pet);
