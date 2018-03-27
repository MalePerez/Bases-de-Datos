const mongoose = require('mongoose')

const Schema = mongoose.Schema

let UserSchema = new Schema({
  userId: { type: Number, required: true, unique: true},
  nombres: { type: String, required: true },
  usuario: { type: String, required: true },
  clave: { type: String, required: true },
  apellidos: { type: String, required: true},
  estado: { type: String, required: true, enum: ['Activo', 'Inactivo']}
})

let UserModel = mongoose.model('Usuario', UserSchema)

module.exports = UserModel
