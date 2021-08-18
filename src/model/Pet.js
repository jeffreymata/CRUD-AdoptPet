const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Pet = Schema({
  NombreMascota: String,
  edad: Number,
});

module.exports = mongoose.model('Pets', Pet);
