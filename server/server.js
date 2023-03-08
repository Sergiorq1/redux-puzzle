/* eslint-disable no-console */
/* eslint-disable semi */
const express = require('express')
const bodyParser = require('body-parser')
const loadJSON = require('./utlis')

// load instruments.json
const imagesJson = loadJSON('./images.json');
// Create server
const app = express()
// Add some middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// **********************************************************
// Test this route in your browser it returns a json object.
// Add some new properties if you like.
app.get('/about', (req, res) => {
  // An object to convert to json
  const message = { message: 'Hello World', foo: 'bar', potato: 'Potato' }
  // send a response as json
  res.json(message)
})

app.get('/images', (req, res) => {
  // You could load data from a database and send
  // it out as a response
  // send the sfpopos data
  console.log('images requested!')
  res.json(imagesJson)
})

const port = 4000
app.listen(port, () => console.log(`LISTENING ON PORT ${port}`))
