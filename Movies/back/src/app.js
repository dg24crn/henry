const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const router = require('./routes/index')
const routerTwo = require('./routes/moviesRouter')

const app = express()

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())

app.use(router, routerTwo)

module.exports = app