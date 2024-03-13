require('dotenv').config()
const express = require('express')
const router = require('./routes')
const app = express()
const port = 8080

app.use('/', router)

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})
