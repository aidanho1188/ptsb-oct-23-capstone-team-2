const UserToken = require('../models/UserTokenSchema.js')

async function saveToken(tokenType, accessToken, refreshToken) {
  const userToken = new UserToken({
    tokenType: tokenType,
    accessToken: accessToken,
    refreshToken: refreshToken,
  })

  try {
    await userToken.save()
    console.log('Token saved successfully')
  } catch (error) {
    console.log(error)
  }
}

module.exports = saveToken
