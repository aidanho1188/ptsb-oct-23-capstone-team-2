const UserToken = require('../models/UserTokenSchema.js')

async function getRefreshToken(tokenType) {
  const refreshToken = await UserToken.findOne({tokenType: tokenType})
  return refreshToken?.refreshToken
}

module.exports = getRefreshToken
