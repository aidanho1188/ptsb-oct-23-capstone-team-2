import UserToken from '../models/UserTokenSchema.js'

async function saveToken(userId, accessToken, refreshToken) {
  const userToken = new UserToken({
    userId: userId,
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

export default saveToken
