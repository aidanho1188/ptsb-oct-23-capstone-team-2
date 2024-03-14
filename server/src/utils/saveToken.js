const UserToken = require('../models/UserTokenSchema.js')

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
    console.log(error)
  }
}

module.exports = saveToken
