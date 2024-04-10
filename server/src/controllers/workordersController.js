const express = require('express')
const axios = require('axios')
const WorkOrder = require('../models/WorkOrder.js')
const getAccessToken = require('../utils/getAccessToken.js')
const saveUpdatedWorkOrder = require('../utils/saveUpdatedWorkOrder.js')
const saveWorkOrder = require('../utils/saveWorkOrder.js')
const {fetchData, sendStatusUpdateRequest, fetchWorkOrder, fetchLocation, sendCheckInRequest, sendCheckOutRequest, fetchWorkActivities} = require('../services/apiService.js')
const getupdateWorkOrders = require('../utils/getUpdatedWorkOrder.js')

const open = async (req, res, next) => {
  try {
    const data = await fetchData('workorders', 'Id,LocationId,Trade,Status,CallDate,UpdatedDate', "Status/Primary eq 'OPEN'")
    console.log('data1: open workorders')
    res.json(data)
  } catch (error) {
    console.log(error)
  }
}

const onSite = async (req, res, next) => {
  try {
    const data = await fetchData('workorders', 'Id,LocationId,Trade,Status,CallDate,UpdatedDate', "Status/Extended eq 'ON SITE'")
    console.log('data2: on site workorders')
    res.json(data)
  } catch (error) {
    console.log(error)
  }
}
const awaitingQuote = async (req, res, next) => {
  try {
    const data = await fetchData('workorders', 'Id,LocationId,Trade,Status,CallDate,UpdatedDate', "Status/Extended eq 'WAITING FOR QUOTE'")
    console.log('data3: awaiting quote workorders')
    res.json(data)
  } catch (error) {
    console.log(error)
  }
}

const incomplete = async (req, res, next) => {
  try {
    const data = await fetchData('workorders', 'Id,LocationId,Trade,Status,CallDate,UpdatedDate', "Status/Extended eq 'INCOMPLETE'")
    console.log('data4: incomplete workorders')
    res.json(data)
  } catch (error) {
    console.log(error)
  }
}

const completed = async (req, res, next) => {
  try {
    const data = await fetchData('workorders', 'Id,LocationId,Trade,Status,CallDate,UpdatedDate', "Status/Primary eq 'COMPLETED'")
    console.log('data5: completed workorders')
    res.json(data)
  } catch (error) {
    console.log(error)
  }
}

const updateWorkOrderStatus = async (req, res, next) => {
  try {
    const primary = req.body.status.split('/')[0]
    const extended = req.body.status.split('/')[1]
    const response = await sendStatusUpdateRequest(req.params.workOrderId, primary, extended)
    console.log('data6: workorder update')
    if (!response.ErrorCode && response.result && response.result !== '') {
      console.log('Saving updated work order...')
      saveUpdatedWorkOrder(response)
    }
    res.json(response)
  } catch (error) {
    res.json({error})
    console.log(error)
  }
}

const getRecentsWorkorders = async (req, res, next) => {
  try {
    const data = await getupdateWorkOrders(req, res)
    res.json(data)
  } catch (error) {
    console.log(error)
  }
}

const getWorkOrderByID = async (req, res, next) => {
  console.log('data7: getting work order by id')
  try {
    const data = await fetchWorkOrder(req.params.workOrderId)
    res.json(data)
  } catch (error) {
    res.json(error)
  }
}

const getLocation = async (req, res, next) => {
  try {
    const data = await fetchLocation(req.params.locationId)
    res.json(data)
  } catch (error) {
    console.log(error)
  }
}

const checkIn = async (req, res, next) => {
  try {
    const response = await sendCheckInRequest(req)
    console.log('data8: verifying req send for check in')
    let result = {success: null, message: '', data: response}
    if (response && response.hasOwnProperty('MechanicId')) {
      result = {
        success: true,
        message: 'Check in successful',
        data: response,
      }
    } else {
      result = {
        success: false,
        message: 'Check in failed',
        data: response,
      }
    }
    res.json(result)
  } catch (error) {
    console.log(error)
  }
}

const checkOut = async (req, res, next) => {
  try {
    const response = await sendCheckOutRequest(req)
    console.log('data9: verifying req send for check out')
    let result = {success: null, message: '', data: response}
    if (response && response.hasOwnProperty('MechanicId')) {
      result = {
        success: true,
        message: 'Check out successful',
        data: response,
      }
    } else {
      result = {
        success: false,
        message: 'Check out failed',
        data: response,
      }
    }
    res.json(result)
  } catch (error) {
    console.log(error)
  }
}

const create = async (req, res, next) => {
  const workOrder = req.body
  try {
    // save work order to database
    const newWorkOrderId = await saveWorkOrder(workOrder)
    res.json({
      success: true,
      message: 'Work order created successfully',
      workOrderId: newWorkOrderId,
    })
  } catch (error) {
    console.log(error)
    res.json({
      success: false,
      message: 'Error creating work order',
      error: error,
    })
  }
}

const getActivities = async (req, res, next) => {
  try {
    const workOrderId = req.params.workOrderId
    const data = await fetchWorkActivities(workOrderId)
    res.json({
      success: true,
      message: 'Work order retrieved successfully',
      data: data,
    })
  } catch (error) {
    console.log(error)
    res.json({
      success: false,
      message: 'Error retrieving work order',
      error: error,
    })
  }
}

module.exports = {
  open,
  onSite,
  incomplete,
  awaitingQuote,
  completed,
  updateWorkOrderStatus,
  getWorkOrderByID,
  getRecentsWorkorders,
  getLocation,
  checkIn,
  checkOut,
  create,
  getActivities,
}
