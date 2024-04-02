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
    responseType: 'json',
  })
  const data = response.data
  return data
}

async function fetchWorkOrder(workOrderId, select = 'Id,LocationId,Trade,Status') {
  console.log(`Working on fetching data from Service Channel...`)
  try {
    const response = await axios.get(`https://sb2api.servicechannel.com/v3/odata/workorders(${workOrderId})?$select=${select}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${await getAccessToken(tokenType)}`,
      },
      responsetype: 'json',
    })
    const data = response.data
    return data
  } catch (error) {
    console.error('Error fetching work order:', error.response.data)
    return error.response.data
  }
}

async function fetchLocation(locationId) {
  console.log(`Working on fetching data from Service Channel...`)
  const response = await axios.get(`https://sb2api.servicechannel.com/v3/locations/${locationId}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${await getAccessToken(tokenType)}`,
    },
    responseType: 'json',
  })
  const data = response.data
  return data
}

async function sendStatusUpdateRequest(workOrderId, primary, extended, note, actor, declineReasonId, customDeclineReason) {
  console.log(`Working on updating work order from Service Channel...`)
  try {
    const response = await axios.put(
      `https://sb2api.servicechannel.com/v3/workorders/${workOrderId}/status`,
      {
        Status: {
          Primary: primary,
          Extended: extended,
        },
        Note: note,
        Actor: actor,
        DeclineReasonId: declineReasonId,
        CustomDeclineReason: customDeclineReason,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${await getAccessToken(tokenType)}`,
        },
        responsetype: 'json',
      },
    )
    const data = response.data
    return data
  } catch (error) {
    console.error('Error Update work order:', error.response.data)
    return error.response.data
  }
}

async function sendCheckInRequest(req) {
  console.log(`Working on checking in work order from Service Channel...`)
  const workOrderId = req.params.workOrderId
  const {WorkTypeId, UserId, TechsCount, Latitude, Longitude} = req.body
  try {
    const response = await axios.post(
      `https://sb2api.servicechannel.com/v3/workorders/${workOrderId}/universalCheckIn`,
      {
        WorkTypeId: WorkTypeId,
        UserId: UserId,
        TechsCount: TechsCount,
        Latitude: Latitude,
        Longitude: Longitude,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${await getAccessToken(tokenType)}`,
        },
        responsetype: 'json',
      },
    )
    const data = response.data
    return data
  } catch (error) {
    console.log('Error checking in work order:', error.response.data)
    return error.response.data
  }
}

module.exports = {fetchData, sendStatusUpdateRequest, fetchWorkOrder, fetchLocation, sendCheckInRequest}
