const UserToken = require('../models/UserTokenSchema.js')

async function saveToken(accessToken, refreshToken) {
  const userToken = new UserToken({
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
