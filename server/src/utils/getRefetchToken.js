const UserToken = require('../models/UserTokenSchema.js')

async function getRefreshToken(tokenType) {
  const refreshToken = await UserToken.findOne({ tokenType: tokenType })
  console.log(refreshToken);
  return refreshToken?.refreshToken
}

module.exports = getRefreshToken
