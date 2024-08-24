require('dotenv').config()
const axios = require('axios')
const getRefreshToken = require('../utils/getRefetchToken.js')
const saveToken = require('../utils/saveToken.js')
const sendErrorResponse = require('../utils/errorHandler.js')
const clientId = process.env.SB_CLIENT_ID
const clientSecret = process.env.SB_CLIENT_SECRET
const tokenType = process.env.SB_TOKEN_TYPE
const grantType = process.env.GRANT_TYPE
const redirect_uri = process.env.REDIRECT_URI
const username = process.env.SB_PROVIDER_USERNAME
const password = process.env.SB_PROVIDER_PASSWORD
const authCode = decodeURIComponent(process.env.AUTH_CODE)
const currentTime = new Date().getTime()
const cooldownPeriod = 9 * 60 * 1000
let lastFetchTime = 0

async function refetchAccessToken() {
  try {
    const body = `grant_type=refresh_token&refresh_token=${await getRefreshToken(tokenType)}`

    const response = await axios.post('https://sb2login.servicechannel.com/oauth/token', body, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString('base64')}`,
      },
    })

    const data = response.data
    const newAccessToken = data.access_token
    const newRefreshToken = data.refresh_token
    console.log('New Access Token:', newAccessToken)
    await saveToken(tokenType, newAccessToken, newRefreshToken)
  } catch (error) {
    const errorResponse = sendErrorResponse(error)
    console.error('refetchAccessToken Error:', errorResponse)
  }
}

async function fetchToken() {
  try {
    console.log('Getting new token...')
    console.log('grantType:', grantType)
    console.log('username:', username)
    console.log('password:', password)
    console.log('authCode:', authCode)
    console.log('redirect_uri:', redirect_uri)
    const body = `grant_type=${grantType}&code=${authCode}&redirect_uri=${redirect_uri}`
    // const body = `grant_type=${grantType}&username=${username}&password=${password}`

    const response = await axios.post('https://sb2login.servicechannel.com/oauth/token', body, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString('base64')}`,
      },
    })

    const data = response.data
    const accessToken = data.access_token
    const refreshToken = data.refresh_token
    console.log(data)
    await saveToken(tokenType, accessToken, refreshToken)
  } catch (error) {
    const errorResponse = sendErrorResponse(error)
    console.error('Error:', errorResponse)
  }
}

function isOnCooldown() {
  return currentTime - lastFetchTime < cooldownPeriod
}

module.exports = {refetchAccessToken, fetchToken}
