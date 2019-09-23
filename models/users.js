const mongoose = require('./connection.js')

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    // unique: true,
    // maxlength: 32,
    default: "buzzLightyear"
  },
  password: {
    type: String,
    required: true,
    // unique: true,
    // maxlength: 9,
    default: "honey"
  },
  firstName: {
    type: String,
    required: true,
    // maxlength: 32,
    default: "nameFirst"
  },
  lastName: {
    type: String,
    required: true,
    // maxlength: 32,
    default: "nameLast"
    },
  email: {
    type: String,
    required: true,
    // unique: true,
    // maxlength: 48, 
    default: "stinger@comb.com"
  },
  phone: {
    type: Number,
    // maxlength: 15, 
    default: "15551234567"
  },
  zipCode: {
    type: Number,
    required: true,
    // maxlength: 10,
    // minlength: 4,
    default: '0000'
  }
})


const UserCollection = mongoose.model('Users', userSchema)


module.exports = UserCollection 

