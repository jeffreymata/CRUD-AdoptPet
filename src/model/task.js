const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = Schema({
  NombreMascota: String,
  description: String,
  status: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('Mascotas', TaskSchema);
