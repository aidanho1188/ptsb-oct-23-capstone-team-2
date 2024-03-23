const mongoose = require('mongoose')

const UpdateWorkOrderSchema = new mongoose.Schema({
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
    default: Date.now,
  },
})

module.exports = mongoose.model('UpdateWorkOrder', UpdateWorkOrderSchema)
