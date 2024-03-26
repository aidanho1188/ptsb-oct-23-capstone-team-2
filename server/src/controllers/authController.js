const express = require('express')
const tokenService = require('../services/tokenService')
const User = require('../models/User.js')
const bcrypt = require('bcrypt')
const sendErrorResponse = require('../utils/errorHandler.js')
const salt = 12

// function for login
const login = async (req, res, next) => {
  try {
    const {username, password} = req.body

    const foundUser = await User.findOne({username})
    if (!foundUser) {
      console.log('foundUser', foundUser)
      return res.status(401).json({success: false, message: 'Invalid Username or Password'})
    }
    const passwordMatch = await checkPassword(password, foundUser.password)
    if (!passwordMatch) {
      return res.status(401).json({success: false, message: 'Invalid Username or Password'})
    } else {
      const accessToken = tokenService.refetchAccessToken()

      return res.status(200).json({
        success: true,
        message: 'Login Successful',
        user: foundUser,
        accessToken,
      })
    }
  } catch (err) {
    sendErrorResponse(err, res)
  }
}

async function checkPassword(password, hash) {
  try {
    const isMatched = await bcrypt.compare(password, hash)
    console.log('isMatched', isMatched)
    return isMatched
  } catch (err) {
    console.error(err)
    return false
  }
}
// function for logout
const logout = (req, res, next) => {
  res.send('You have been logged out')
}

const register = async (req, res, next) => {
  try {
    const {username, firstName, lastName, password} = req.body
    if (!username || !firstName || !lastName || !password) {
      throw new Error('Incomplete Data')
    }

    const newUser = new User({
      username,
      firstName,
      lastName,
      password: bcrypt.hashSync(password, salt),
    })
    await newUser.save()

    return res.status(201).json({message: 'User Created', data: {newUser}})
  } catch (err) {
    console.log(err)
    res.status(500).json({error: 'Internal Server Error'})
  }
}

module.exports = {login, logout, register}
