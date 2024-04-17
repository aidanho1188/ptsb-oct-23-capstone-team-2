const express = require('express')
const UserToken = require('../models/UserToken.js')
const {refetchAccessToken} = require('../services/tokenService.js')
const axios = require('axios')
const getAccessToken = require('../utils/getAccessToken.js')
const tokenType = process.env.TOKEN_TYPE
let expiryTime = 9 * 60 * 1000

async function handleExpiredToken(req, res, next) {
  console.log('Middleware is running...')
  let accessToken = await getAccessToken(tokenType)
  try {
    if (!accessToken || Date.now() > expiryTime) {
      const response = await axios.get('https://sb2api.servicechannel.com/v3/ApplicationAccess', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })

      if (typeof response.data !== 'string') {
        console.log('Access Token is still valid')
        console.log(response)
        next()
      } else {
        console.log('Access Token is expired')
        console.log(response)
        await refetchAccessToken()
        next()
      }
    }
  } catch (error) {
    console.log('Error:', error.response.data.ErrorCode)
    if (error.response.status === 401 || error.response.data.ErrorCode === 504) {
      console.log('Attempting to refresh token')
      await refetchAccessToken()
      next()
    } else if (error.response.status === 502) {
      console.log('Server is down')
      res.status(502).send('Server is down')
    } else {
      console.error('Error:', error.response.statusText)
      res.status(error.response.status).send(error.response.statusText)
      next()
    }
  }
}

module.exports = {handleExpiredToken}
