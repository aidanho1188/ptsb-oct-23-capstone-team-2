const UpdatedWorkOrder = require('../models/UpdatedWorkOrder.js')
const fetchWorkOrder = require('../services/apiService.js')
const sendErrorResponse = require('../utils/errorHandler.js')

async function saveUpdatedWorkOrder(updatedRes) {
  const workOrderId = updatedRes.data.Id
  const [preStatus, newStatus] = filterStatus(updatedRes.data.results)

  try {
    const {LocationId: locationId, Trade: trade, CallDate: callDate} = await fetchWorkOrder(workOrderId, 'LocationId,Trade,CallDate')
    const updatedWorkOrder = new UpdatedWorkOrder({
      workOrderId,
      preStatus,
      newStatus,
      locationId,
      trade,
      callDate,
    })
    await updatedWorkOrder.save()
    console.log('Updated work order:', updatedWorkOrder)
  } catch (error) {
    sendErrorResponse(res, error)
  }
}

module.exports = saveUpdatedWorkOrder
