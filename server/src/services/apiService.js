require('dotenv').config()
const axios = require('axios')
const authCode = process.env.AUTH_CODE
const clientId = process.env.CLIENT_ID
const clientSecret = process.env.CLIENT_SECRET
const grantType = process.env.GRANT_TYPE
const redirect_uri = process.env.REDIRECT_URI

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
    console.log(data)
    // if 401, use refresh token
  } catch (error) {
    console.error('Error:', error)
  }
}


module.exports = {fetchToken}
