const mongoose = require('./connection.js')

const hiveSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  imageLink: String
})

const hiveTypeCollection = mongoose.model('Hive Types', hiveSchema)

module.exports = hiveTypeCollection 
