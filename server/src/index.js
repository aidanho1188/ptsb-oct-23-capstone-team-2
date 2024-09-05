require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const router = require('./routes')
const app = express()
const port = 8080
const DB_URL = process.env.DB_URL

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())
app.use('/', router)

// uncomment this when use on local
app.listen(port, async () => {
  await dbConnect()
  console.log(`Server listening at http://localhost:${port}`)
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

async function dbConnect() {
  try {
    await mongoose.connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log(`Connected to MongoDB!`)
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error}`)
  }
}

dbConnect()

module.exports = app
