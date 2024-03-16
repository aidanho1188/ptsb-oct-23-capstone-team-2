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
  const response = await axios.get(`https://sb2api.servicechannel.com/v3/odata/${endpoint}?$select=${select}&$filter=${filter}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${await getAccessToken('sandbox')}`,
    },
    ResponseType: 'json',
  })
  data = response.data
  return data
}

module.exports = {fetchToken, fetchData}
