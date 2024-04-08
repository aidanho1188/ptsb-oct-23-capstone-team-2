const WorkOrder = require('../models/WorkOrder.js')
const sendErrorResponse = require('../utils/errorHandler.js')

function getWorkOrderId() {
  // Get the largest work order id from the database
  // Increment the largest work order id by 1
  // Return the incremented work order id
  let workOrder = WorkOrder.find().sort({workOrderId: -1}).limit(1)
  let id = workOrder.length > 0 ? workOrder[0].workOrderId : 0

  if (id < 300000000) {
    return 300000000
  }
  return id + 1
}

module.exports = getWorkOrderId
