var mongoose = require('mongoose')

var scheduleSchema = new mongoose.Schema({
  date: {
    type: Date,
    unique: true,
    required: true
  },
  location: String,
  worshipLeader: String,
  meetingLeader: String,
  teacher: String,
  busyBees: String,
  nursery: String,
  logistics: String,
  mealTheme: String
})

module.exports = mongoose.model('Schedule', scheduleSchema)