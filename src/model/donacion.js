const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const donacionSchema = Schema({
  nombreDonante: String,
  motivoDonacion: String,
  NombreMascota: String,
  description: String,
  edad: String,
  raza: String,
  tamanio: String,
  peso: String
});

module.exports = mongoose.model('donacion', donacionSchema);
