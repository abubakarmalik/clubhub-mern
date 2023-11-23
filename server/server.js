const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const connectDB = require('./config/DbConnection')
require('dotenv').config()

connectDB()
const app = express()

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
)

app.use(bodyParser.json())
app.use(cors())

const port = process.env.PORT
app.listen(port, () => {
  console.log(`server is running on port ${port}`)
})
