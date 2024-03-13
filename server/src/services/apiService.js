require('dotenv').config()
const axios = require('axios')
const saveToken = require('../utils/saveToken.js')
const clientId = process.env.CLIENT_ID
const clientSecret = process.env.CLIENT_SECRET
const grantType = process.env.GRANT_TYPE
const redirect_uri = process.env.REDIRECT_URI
const authCode = decodeURIComponent(process.env.AUTH_CODE)

async function fetchToken() {
  try {
    const body = `grant_type=${grantType}&code=${authCode}&redirect_uri=${encodeURIComponent(redirect_uri)}`

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
    await saveToken(accessToken, refreshToken)
    // if 401, use refresh token
  } catch (error) {
    console.error('Error:', error)
  }
}

module.exports = {fetchToken}
