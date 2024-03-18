require('dotenv').config()
const axios = require('axios')
const saveToken = require('../utils/saveToken.js')
const getAccessToken = require('../utils/getAccessToken.js')
const clientId = process.env.SB_CLIENT_ID
const clientSecret = process.env.SB_CLIENT_SECRET
const grantType = process.env.GRANT_TYPE
const redirect_uri = process.env.REDIRECT_URI
const tokenType = process.env.TOKEN_TYPE
const authCode = decodeURIComponent(process.env.SB_AUTH_CODE)

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

/**
 * Fetches data from the specified endpoint from the Service channel
 * @param {string} endpoint - The endpoint to fetch data from. `ex. workorders or workorders/id`
 * @param {string} select - The fields to select in the fetched data. `ex. Id,LocationId,Trade,Status`
 * @param {string} filter - The filter to apply to the fetched data. `ex. Status/Primary eq 'OPEN'`
 * @returns {Promise<any>} A promise that resolves with the fetched data.
 */
async function fetchData(endpoint, select, filter) {
  console.log(`working on fetching data from Service Channel...`)
  const response = await axios.get(`https://sb2api.servicechannel.com/v3/odata/${endpoint}?$select=${select}&$filter=${filter}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${await getAccessToken(tokenType)}`,
    },
    ResponseType: 'json',
  })
  data = response.data
  console.log(data)
  return data
}

module.exports = {fetchToken, fetchData}
