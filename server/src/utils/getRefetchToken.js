const UserToken = require('../models/UserToken.js')
const sendErrorResponse = require('../utils/errorHandler.js')

async function getRefreshToken(tokenType) {
  try {
    const refreshToken = await UserToken.findOne({tokenType: tokenType})
    return refreshToken?.refreshToken
  } catch (error) {
    const errorResponse = sendErrorResponse(error)
    console.error('Error:', errorResponse)
  }
}

module.exports = getRefreshToken
