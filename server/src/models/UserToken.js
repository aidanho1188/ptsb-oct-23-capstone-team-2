const mongoose = require('mongoose')

const UserTokenSchema = new mongoose.Schema({
  tokenType: {
    type: String,
    required: true,
  },
  accessToken: {
    type: String,
    required: false,
  },
  refreshToken: {
    type: String,
    required: true,
  },
})

module.exports = mongoose.model('UserToken', UserTokenSchema)
