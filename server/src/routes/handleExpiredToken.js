const express = require('express')
const UserToken = require('../models/UserToken.js')
const {refetchAccessToken} = require('../services/tokenService.js')
const axios = require('axios')
const getAccessToken = require('../utils/getAccessToken.js')
const tokenType = process.env.TOKEN_TYPE
let expiryTime = 9 * 60 * 1000

async function handleExpiredToken(req, res, next) {
  let accessToken = await getAccessToken(tokenType)
  try {
    if (!accessToken || Date.now() > expiryTime) {
      const response = await axios.post('https://sb2api.servicechannel.com/v3/test/notifications1', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      next()
    } else {
      console.log('Access Token is still valid')
      const response = accessToken
      accessToken = response.token
      expiryTime = Date.now() + response.expires_in * 1000
      next()
    }
  } catch (error) {
    if (error.response.status === 401 || error.response.status === 504) {
      console.log('Attempting to refresh token')
      await refetchAccessToken()
      next(error)
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
