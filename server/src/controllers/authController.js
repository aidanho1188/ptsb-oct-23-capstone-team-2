const express = require('express')
const apiService = require('../services/apiService')
const tokenService = require('../services/tokenService')
const User = require('../models/UserSchema.js')
const bcrypt = require('bcrypt')
const salt = 12

// function for login
const login = async (req, res, next) => {
  // next()
  // if (req.body.username === 'test' && req.body.password === 'test') {
  try {
    const { username, password } = req.body

    if (!username || !password) {
      return res.status(400).send('Username and Password required')
    }

    const foundUser = await User.findOne({ username })
    if (!foundUser) {
      return res.status(401).send('Unauthorized')
    }

console.log("foundUser", foundUser.password);
    const passwordMatch = await checkPassword(password, foundUser.password)

    if (!passwordMatch) {
      return res.status(401).send('Unauthorized')
    }

    const accessToken = tokenService.generateAccessToken(user)
    res.status(200).json({
      success: true,
      message: 'Login Successful',
      user,
      accessToken,
    })
  } catch (err) {
    console.error(err)
    res.status(500).send('Internal Server Error')
  }
}
// }

// async function getUserFromDatabase(username) {
//   try {
//     const isUserFound = await User.findOne({ username })
//     console.log("isUserFound", isUserFound);
//     return isUserFound
//   } catch (err) {
//     console.error(err)
//     return null
//   }
// }
//function to hash password

// async function hashPassword(password) {
//   try {
//     const salt = await bcrypt.genSalt(saltRounds)
//     const hash = await bcrypt.hash(password, salt)
//     return hash
//   } catch (err) {
//     console.error(err)
//     return null
//   }
// }

// const password = 'Password!'
// hashPassword(password)
//   .then((hash) => console.log(hash))
//   .catch((Err) => console.log(err))

async function checkPassword(password, hash) {
  try {
    const isMatched = await bcrypt.compare(password, hash)
    console.log("isMatched", isMatched);
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
    const { username, firstName, lastName, password } = req.body
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

    return res.status(201).json({ message: 'User Created', data: { newUser } })
  } catch (err) {
    console.log(err)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}

module.exports = { login, logout, register }
