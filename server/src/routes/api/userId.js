const express = require('express')
const router = express.Router()
const axios = require('axios')
const getAccessToken = require('../../utils/getAccessToken.js')
const tokenType = process.env.SB_TOKEN_TYPE

router.get('/', async (req, res) => {
  const response = await axios.get(`https://sb2api.servicechannel.com/v3/users/current/profile`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${await getAccessToken(tokenType)}`,
    },
    responsetype: 'json',
  })
  console.log('Current userId:', response.data.UserProfile.UserId)
  res.json(response.data.UserProfile.UserId)
})

module.exports = router
