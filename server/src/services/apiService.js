require('dotenv').config()
const axios = require('axios')
const getAccessToken = require('../utils/getAccessToken.js')
const tokenType = process.env.SB_TOKEN_TYPE

/**
 * Fetches data from the specified endpoint from the Service channel
 * @param {string} endpoint - The endpoint to fetch data from. `ex. workorders or workorders/id`
 * @param {string} select - The fields to select in the fetched data. `ex. Id,LocationId,Trade,Status`
 * @param {string} filter - The filter to apply to the fetched data. `ex. Status/Primary eq 'OPEN'`
 * @returns {Promise<any>} A promise that resolves with the fetched data.
 */
async function fetchData(endpoint, select, filter) {
  console.log(`Working on fetching data from Service Channel...`)
  const response = await axios.get(`https://sb2api.servicechannel.com/v3/odata/${endpoint}?$select=${select}&$filter=${filter}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${await getAccessToken(tokenType)}`,
    },
    ResponseType: 'json',
  })
  const data = response.data
  return data
}

async function fetchWorkOrder(workOrderId) {
  console.log(`Working on fetching data from Service Channel...`)
  const response = await axios.get(`https://sb2api.servicechannel.com/v3/odata/workorders(${workOrderId})?$select=Id,LocationId,Trade,Status`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${await getAccessToken(tokenType)}`,
    },
    ResponseType: 'json',
  })
  const data = response.data
  return data
}

module.exports = {fetchData, fetchWorkOrder}
