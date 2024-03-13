const express = require('express')
const apiService = require('../services/apiService')
const authRouter = express.Router()

// function for login
const login = (req, res, next) => {
  // if (req.body.username === 'test' && req.body.password === 'test') {
  //   next()
  //   // business logic to get access token
  // } else {
  //   res.status(401).send('Unauthorized')
  // }
  apiService.fetchToken()
}

// function for logout
const logout = (req, res, next) => {
  res.send('You have been logged out')
}

module.exports = {login, logout}
