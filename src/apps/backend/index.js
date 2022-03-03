const express = require('express');
const bodyParser = require('body-parser')
const db = require('./db')
const userRouter = require('./routes/user-router')

const app = express();



const apiPort = process.env.PORT || 5000 

app.use(bodyParser.urlencoded({ extended: true }))

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.use('/api', userRouter)
// app.use(bodyParser.json())

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))