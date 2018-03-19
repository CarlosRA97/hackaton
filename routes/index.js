'use strict'

const express = require('express')
const api = express.Router()
const bodyParser = require('body-parser')

api.use(express.static('public'))

api.get('/', (req, res) => {
  console.log("eee")
  res.send({message: `ee`})
})

module.exports = api
