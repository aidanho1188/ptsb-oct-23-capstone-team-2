const express = require('express')
const axios = require('axios')
const getAccessToken = require('../utils/getAccessToken.js')
const {fetchData} = require('../services/apiService.js')

const open = async (req, res, next) => {
  try {
    const data = await fetchData('workorders', 'Id,LocationId,Trade,Status', "Status/Primary eq 'OPEN'")
    // console.log(data)
    res.json(data)
  } catch (error) {
    console.log(error)
    // next()
  }
}

const onSite = async (req, res, next) => {
  try {
    const data = await fetchData('workorders', 'Id,LocationId,Trade,Status', "Status/Extended eq 'ON SITE'")
    console.log(data)
    res.json(data)
  } catch (error) {
    console.log(error)
    // next()
  }
}
const awaitingQuote = async (req, res, next) => {
  try {
    const data = await fetchData('workorders', 'Id,LocationId,Trade,Status', "Status/Extended eq 'Awaiting Quote'")
    console.log(data)
    res.json(data)
  } catch (error) {
    console.log(error)
  }
}

module.exports = {open, onSite, awaitingQuote}
