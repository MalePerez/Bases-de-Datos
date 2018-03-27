const mongoose = require('mongoose')

const Schema = mongoose.Schema

let EventoSchema = new Schema({
  userId: { type: Number, required: true},
  title: { type: String, required: true },
  start: { type: String, required: true },
  end: { type: String, required: true }
})

let EventoModel = mongoose.model('Eventos', EventoSchema)

module.exports = EventoModel
