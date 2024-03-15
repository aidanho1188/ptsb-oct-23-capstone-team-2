const express = require('express')
const axios = require('axios')
const getAccessToken = require('../utils/getAccessToken.js')

const open = async (req, res, next) => {
  try {
    const response = await axios.get(
      'https://sb2api.servicechannel.com/v3/odata/workorders?$select=Id,Caller,Trade,Status&$filter=Status/Primary%20eq%20%27OPEN%27',
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${await getAccessToken('sandbox')}`,
        },
        ResponseType: 'json',
      },
    )
    const data = response.data
    console.log(data)
    res.json(data)
  } catch (error) {
    console.log(error)
    next()
  }
  // get all work orders with open as primary status
}

const onSite = async (req, res, next) => {
  try {
    const response = await axios.get(
      'https://sb2api.servicechannel.com/v3/odata/workorders?$select=Id,Caller,Trade,Status&$filter=Status/Primary%20eq%20%27IN+PROGRESS%27',
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${await getAccessToken('sandbox')}`,
        },
        ResponseType: 'json',
      },
    )
    const data = response.data
    console.log(data)
    res.json(data)
  } catch (error) {
    console.log(error)
    next()
  }
}

module.exports = { open, onSite }
