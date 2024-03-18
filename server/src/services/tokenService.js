const axios = require('axios')
const getRefreshToken = require('../utils/getRefetchToken.js')
const saveToken = require('../utils/saveToken.js')
const clientId = process.env.SB_CLIENT_ID
const clientSecret = process.env.SB_CLIENT_SECRET
const tokenType = process.env.SB_TOKEN_TYPE

async function refetchAccessToken() {
  try {
    const body = `grant_type=refresh_token&refresh_token=${await getRefreshToken('production')}`

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
    console.error('Error:', error)
  }
}

module.exports = {refetchAccessToken}
