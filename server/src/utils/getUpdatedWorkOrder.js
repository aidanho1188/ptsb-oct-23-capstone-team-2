const updatedWorkOrder = require('../models/UpdatedWorkOrder.js')
const sendErrorResponse = require('../utils/errorHandler.js')

async function getupdateWorkOrders(req, res) {
  try {
    const updateWorkOrders = await updatedWorkOrder.find().sort({updatedTime: -1}).limit(10)
    return updateWorkOrders
  } catch (error) {
    const errorResponse = sendErrorResponse(error)
    console.error('Error:', errorResponse)
  }
}

module.exports = getupdateWorkOrders
