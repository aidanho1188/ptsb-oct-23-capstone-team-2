const mongoose = require('mongoose')

const WorkorderUpdateSchema = new mongoose.Schema({
  workorderId: {
    type: String,
    required: true,
  },
  status: {
    type: String,
  },
  data: {},
  time: {
    type: Date,
    default: Date.now
  }
})


module.exports = mongoose.model('WorkOrderUpdate', WorkorderUpdateSchema)
