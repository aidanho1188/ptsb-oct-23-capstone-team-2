const WorkOrder = require('../models/WorkOrder.js')
const sendErrorResponse = require('../utils/errorHandler.js')

function getWorkOrderId() {
  // Get the largest work order id from the database
  // Increment the largest work order id by 1
  // Return the incremented work order id
  let id = WorkOrder.find().sort({ workOrderId: -1 }).limit(1);
  return id + 1
}

module.exports = getWorkOrderId
