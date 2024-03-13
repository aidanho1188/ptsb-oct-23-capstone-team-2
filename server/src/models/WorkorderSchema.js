const mongoose = require('mongoose');

const WorkorderSchema= new mongoose.Schema({
  workorderId: {
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

module.exports = mongoose.model('Workorder', WorkorderSchema);