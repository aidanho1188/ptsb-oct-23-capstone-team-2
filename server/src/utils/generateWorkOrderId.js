const WorkOrder = require('../models/WorkOrder.js')
const sendErrorResponse = require('../utils/errorHandler.js')

async function getWorkOrderId() {
  // Get the largest work order id from the database
  // Increment the largest work order id by 1
  // Return the incremented work order id
  let workOrder = await WorkOrder.find({}).sort({WorkOrderId: -1}).limit(1)
  let id = workOrder[0].WorkOrderId
  if (id < 300000000) {
    return 300000000
  }
  console.log('WorkOrderId:', id + 1)
  return id + 1
}

module.exports = getWorkOrderId
