const WorkOrder = require('../models/WorkOrder')
const generateWorkOrderId = require('./generateWorkOrderId')

async function saveWorkOrder(data) {
  try {
    const workOrderId = await generateWorkOrderId()
    console.log('WorkOrderId:', workOrderId)
    const workOrder = new WorkOrder({
      WorkOrderId: workOrderId,
      ContractInfo: {
        StoreId: data.StoreId,
        TradeName: data.TradeName,
        ProviderId: data.ProviderId,
      },
      Category: data.Category,
      Priority: data.Priority,
      Nte: data.Nte,
      CallDate: data.CallDate,
      ScheduledDate: data.ScheduledDate,
      Description: data.Description,
      Status: {
        Primary: data.Primary,
        Extended: data.Extended,
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
