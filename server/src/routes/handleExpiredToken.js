const express = require('express')
const userToken = require('../models/UserTokenSchema.js')
const {refetchAccessToken} = require('../services/tokenService.js')
const axios = require('axios')
const getAccessToken = require('../utils/getAccessToken.js')
let accessToken = getAccessToken('sandbox')
let expiryTime = 9 * 60 * 1000

async function handleExpiredToken(req, res, next) {
  try {
    // TODO: extract this into a function
    if (!accessToken || Date.now() > expiryTime) {
      const response = await axios.get('https://sb2api.servicechannel.com/v3/test/notifications1', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${await getAccessToken('sandbox')}`,
        },
        ResponseType: 'json',
      })
      next()
    } else {
      console.log('Access Token is still valid')
      const response = await getAccessToken('sandbox')
      accessToken = response.token
      expiryTime = Date.now() + response.expires_in * 1000
    }
  } catch (error) {
    if (error.response.status === 401 || error.response.status === 504) {
      console.log('Attempting to refresh token')
      await refetchAccessToken()
      next()
    } else if (error.response.status === 502) {
      console.log('Server is down')
      res.status(502).send('Server is down')
    } else {
      console.error('Error:', error)
      res.status(error.response.status).send(error.response.statusText)
      next()
    }
  }
}

module.exports = {handleExpiredToken}
