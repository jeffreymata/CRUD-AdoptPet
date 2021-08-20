const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PetSchema = Schema({
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


const Pet = module.exports = mongoose.model('Pets', PetSchema);

