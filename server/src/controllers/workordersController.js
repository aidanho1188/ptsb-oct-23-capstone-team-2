const express = require('express')
const axios = require('axios')
const getAccessToken = require('../utils/getAccessToken.js')
const {fetchData} = require('../services/apiService.js')

const open = async (req, res, next) => {
  try {
    const data = await fetchData('workorders', 'Id,LocationId,Trade,Status', "Status/Primary eq 'OPEN'")
    console.log(data)
    res.json(data)
  } catch (error) {
    console.log(error)
  }
}

const onSite = async (req, res, next) => {
  try {
    const data = await fetchData('workorders', 'Id,LocationId,Trade,Status', "Status/Extended eq 'ON SITE'")
    console.log(data)
    res.json(data)
  } catch (error) {
    console.log(error)
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

const incomplete = async (req, res, next) => {
  try {
    const data = await fetchData('workorders', 'Id,LocationId,Trade,Status', "Status/Extended eq 'Incomplete'")
    console.log(data)
    res.json(data)
  } catch (error) {
    console.log(error)
    // next()
  }
}

module.exports = {open, onSite, incomplete, awaitingQuote}

const completed = async (req, res, next) => {
  try {
    const data = await fetchData('workorders', 'Id,LocationId,Trade,Status', "Status/Primary eq 'COMPLETED'")
    console.log(data)
    res.json(data)
  } catch (error) {
    console.log(error)
  }
}

module.exports = {open, onSite, completed}

