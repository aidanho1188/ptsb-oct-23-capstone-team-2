const express = require('express')
const userToken = require('../models/UserTokenSchema')
const {refetchAccessToken} = require('../services/tokenService.js')
const axios = require('axios')
const getAccessToken = require('../utils/getAccessToken.js')

async function handle401(req, res, next) {
  try {
    // check for valid access token here instead of status code
    // TODO: extract this into a function
    const response = await axios.get('https://sb2api.servicechannel.com/v3/ApplicationAccess', {
      headers: {
        Authorization: `Bearer ${await getAccessToken('sandbox')}`,
      },
    })
    next()
  } catch (error) {
    if (error.response.status === 401) {
      console.log('Attempting to refresh token')
        await refetchAccessToken()
    }
  }
}

module.exports = {handle401}
