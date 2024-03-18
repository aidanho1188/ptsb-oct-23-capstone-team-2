const express = require('express')
const userToken = require('../models/UserTokenSchema.js')
const {refetchAccessToken} = require('../services/tokenService.js')
const axios = require('axios')
const getAccessToken = require('../utils/getAccessToken.js')

async function handleExpiredToken(req, res, next) {
  try {
    // check for valid access token here instead of status code
    // TODO: extract this into a function
    const response = await axios.get(
      'https://sb2api.servicechannel.com/v3/test/webhooks/notifications',
      {URL: 'https://sb2api.servicechannel.com/swagger/ui/o2c-html'},
      {
        headers: {
          Authorization: `Bearer ${await getAccessToken('sandbox')}`,
        },
      },
    )
    console.log('Access Token is still valid')
    next()
  } catch (error) {
    if (error.response.status === 401) {
      console.log('Attempting to refresh token')
      await refetchAccessToken()
      next()
    } else if (error.response.status === 502) {
      console.log('Server is down')
      res.status(502).send('Server is down')
    } else {
      console.error('Error:', error)
      res.status(500).send('Internal Server Error')
    }
  }
}

module.exports = {handleExpiredToken}
