const mongoose = require('mongoose')

const WorkOrderSchema = new mongoose.Schema({
  WorkOrderId: {
    type: Number,
    required: true,
    unique: true,
  },
  ContractInfo: {
    StoreId: {
      type: String,
      required: true,
    },
    TradeName: {
      type: String,
      required: true,
    },
    ProviderId: {
      type: Number,
      required: true,
    },
  },
  Category: {
    type: String,
    required: true,
  },
  Priority: {
    type: String,
    required: true,
  },
  Nte: {
    type: Number,
    required: true,
  },
  CallDate: {
    type: Date,
    required: true,
  },
  ScheduledDate: {
    type: Date,
    required: true,
  },
  Description: {
    type: String,
    required: false,
  },
  Status: {
    Primary: {
      type: String,
      required: true,
    },
    Extended: {
      type: String,
      default: '',
    },
  },
})

module.exports = mongoose.model('WorkOrder', WorkOrderSchema)
