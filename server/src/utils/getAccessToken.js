const UserToken = require('../models/UserToken.js')
const sendErrorResponse = require('../utils/errorHandler.js')

async function getAccessToken(tokenType) {
  try {
    const accessToken = await UserToken.findOne({tokenType: tokenType})
    return accessToken.accessToken
  } catch (error) {
    const errorResponse = sendErrorResponse(error)
    console.error('getAccessToken Error:', errorResponse)
  }
}

module.exports = getAccessToken
