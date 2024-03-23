const express = require('express')
const axios = require('axios')
const getAccessToken = require('../utils/getAccessToken.js')
const {fetchData, sendStatusUpdateRequest, fetchWorkOrder} = require('../services/apiService.js')

const open = async (req, res, next) => {
  try {
    const data = await fetchData('workorders', 'Id,LocationId,Trade,Status', "Status/Primary eq 'OPEN'")
    console.log('data1: open workorders')
    res.json(data)
  } catch (error) {
    console.log(error)
  }
}

const onSite = async (req, res, next) => {
  try {
    const data = await fetchData('workorders', 'Id,LocationId,Trade,Status', "Status/Extended eq 'ON SITE'")
    console.log('data2: on site workorders')
    res.json(data)
  } catch (error) {
    console.log(error)
  }
}
const awaitingQuote = async (req, res, next) => {
  try {
    const data = await fetchData('workorders', 'Id,LocationId,Trade,Status', "Status/Extended eq 'Awaiting Quote'")
    console.log('data3: awaiting quote workorders')
    res.json(data)
  } catch (error) {
    console.log(error)
  }
}

const incomplete = async (req, res, next) => {
  try {
    const data = await fetchData('workorders', 'Id,LocationId,Trade,Status', "Status/Extended eq 'Incomplete'")
    console.log('data4: incomplete workorders')
    res.json(data)
  } catch (error) {
    console.log(error)
  }
}

const completed = async (req, res, next) => {
  try {
    const data = await fetchData('workorders', 'Id,LocationId,Trade,Status', "Status/Primary eq 'Completed'")
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
    const data = await sendStatusUpdateRequest(req.params.workOrderId, primary, extended)
    console.log('data6: workorder update')
    res.json(data)
  } catch (error) {
    res.json(error)
    console.log(error)
  }
}

const getWorkOrder = async (req, res, next) => {
  try {
    const data = await fetchWorkOrder(req.params.workOrderId)
    console.log('data7: get workorder')
    res.json(data)
  } catch (error) {
    console.log(error)
  }
}

module.exports = {open, onSite, incomplete, awaitingQuote, completed, updateWorkOrderStatus, getWorkOrder}
