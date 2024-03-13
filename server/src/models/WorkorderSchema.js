const mongoose = require('mongoose');

const WorkorderSchema= new mongoose.Schema({
  workOrderId: {
    type: String,
    required: true
  },
  status: {
    type: String,
  },
  data: {
    type: String,
  }
});

module.exports = mongoose.model('UserToken', WorkorderSchema);