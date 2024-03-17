require('dotenv').config()
const axios = require('axios')
const saveToken = require('../utils/saveToken.js')
const clientId = process.env.SB_CLIENT_ID
const clientSecret = process.env.SB_CLIENT_SECRET
const grantType = process.env.GRANT_TYPE
const redirect_uri = process.env.REDIRECT_URI
const tokenType = process.env.SB_TOKEN_TYPE
const authCode = decodeURIComponent(process.env.SB_AUTH_CODE)

// one time use with authCode
async function fetchToken() {
  try {
    const body = `grant_type=${grantType}&code=${authCode}&redirect_uri=${redirect_uri}`

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
    console.error('Error:', error)
  }
}

// get work orders with open as primary status


module.exports = {fetchToken}
