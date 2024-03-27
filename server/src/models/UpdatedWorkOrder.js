const mongoose = require('mongoose')

const UpdateWorkOrderSchema = new mongoose.Schema({
  workorderId: {
    type: String,
    required: true,
  },
  status: {
    type: String,
  },
  preStatus: {type: String},
  newStatus: {type: String},
  locationId: {type: Number},
  trade: {type: String},
  callDate: {type: Date},
  updatedTime: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model('UpdatedWorkOrder', UpdateWorkOrderSchema)
