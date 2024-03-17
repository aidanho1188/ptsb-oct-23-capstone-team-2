const UserToken = require('../models/UserTokenSchema.js');
const sendErrorResponse = require('../utils/errorHandler.js');

async function saveToken(tokenType, newAccessToken, newRefreshToken) {
  try {
    await UserToken.findOneAndUpdate(
      {tokenType: tokenType},
      {
        accessToken: newAccessToken,
        refreshToken: newRefreshToken,
      },
      {upsert: true},
    )
    console.log('Token saved successfully')
  } catch (error) {
    const errorResponse = sendErrorResponse(error);
    console.error('Error:', errorResponse);
  }
}

module.exports = saveToken
