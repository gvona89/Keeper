const mongoose = require('./connection.js')


const logSchema = new mongoose.Schema({
  userId: {
    type: String,
    default: "h"
  },
  timeStamp: {
    type: Date, 
    default: Date.now
  },
  yearNumber: {
    type: Number, 
    default: 0
  },
  weekNumber: {
    type: Number, 
    default: 0
  },
  dayNumber: {
    type: Number, 
    default: 1
  },
  boxType: {
    type: String, 
    default: "Deep"
  },
  boxNumber: {
    type: Number, 
    default: 1
  },
  frameNumber: {
    type: Number, 
    default: 10
  },
  comments:  
  {
    type: String,
    default: "The Buzz"
  },
  
})


// Sets the timeStamp parameter equal to the current time
logSchema.pre('save', function(next){
  now = new Date();
  this.timeStamp = now
  next();
});


const LogCollection = mongoose.model('Logs', logSchema)

module.exports = LogCollection 
