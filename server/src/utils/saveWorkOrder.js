const WorkOrder = require('../models/WorkOrder')
const generateWorkOrderId = require('./generateWorkOrderId')

function saveWorkOrder(data) {
  try {
    const workOrderId = generateWorkOrderId()
    const workOrder = new WorkOrder({
      WorkOrderId: workOrderId,
      ContractInfo: {
        StoreId: data.ContractInfo.StoreId,
        TradeName: data.ContractInfo.TradeName,
        ProviderId: data.ContractInfo.ProviderId,
      },
      Category: data.Category,
      Priority: data.Priority,
      Nte: data.Nte,
      CallDate: data.CallDate,
      ScheduledDate: data.ScheduledDate,
      Description: data.Description,
      Status: {
        Primary: data.Status.Primary,
        Extended: data.Status.Extended,
      },
    })
    workOrder.save()
    return workOrderId
  } catch (error) {
    console.log(error)
    return error
  }
}

module.exports = saveWorkOrder
