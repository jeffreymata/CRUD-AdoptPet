const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = Schema({
  nombreUsuario: String,
  telefono: String,
  correo: String

});

module.exports = mongoose.model('usuario', userSchema);
