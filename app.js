'use strict'

const express = require('express')

const app = express()
const bodyParser = require('body-parser')

const api = require('./routes')


app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.set('view engine', 'pug')

app.use('/', api)

module.exports = app
