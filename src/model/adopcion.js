const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adopcionSchema = Schema({
  nombreSolicitante: String,
  telefono: String,
  correo: String,
  nombreMascota: String,
  edad: String,
  raza: String,
  motivoAdopcion: String,
  domicilio: String

});

module.exports = mongoose.model('adopcion', adopcionSchema);
