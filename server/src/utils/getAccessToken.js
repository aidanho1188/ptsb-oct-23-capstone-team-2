const UserToken = require('../models/UserTokenSchema.js')

async function getAccessToken(tokenType) {
  const accessToken = await UserToken.findOne({tokenType: tokenType})
  return accessToken.accessToken
}

module.exports = getAccessToken
