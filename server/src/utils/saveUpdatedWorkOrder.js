const UpdatedWorkOrder = require('../models/UpdatedWorkOrder.js')
const {fetchWorkOrder} = require('../services/apiService.js')
const getStatus = require('../utils/filterStatus.js')
const sendErrorResponse = require('../utils/errorHandler.js')

async function saveUpdatedWorkOrder(updatedRes) {
  const workorderId = updatedRes.id
  console.log('Updated work order:', updatedRes)
  const [preStatus, newStatus] = getStatus(updatedRes.result)

  try {
    const {LocationId: locationId, Trade: trade, CallDate: callDate} = await fetchWorkOrder(workorderId, 'LocationId,Trade,CallDate')
    const updatedWorkOrder = new UpdatedWorkOrder({
      workorderId,
      preStatus,
      newStatus,
      locationId,
      trade,
      callDate,
    })
    await updatedWorkOrder.save()
    console.log('Updated work order:', updatedWorkOrder)
  } catch (error) {
    console.log('Error saving updated work order:', error)
  }
}

module.exports = saveUpdatedWorkOrder
