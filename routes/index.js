'use strict'

const express = require('express')
const api = express.Router()
const bodyParser = require('body-parser')

api.use(express.static('public'))

api.get('/', (req, res) => {
  res.render('./index')
})

module.exports = api
