require('dotenv').config()

// Database
require('./configs/mongoose.config')

// Debugger
require('./configs/debugger.config')

// App
const express = require('express')
const app = express()

const userLocals = require('./configs/userlogged.config')

// Configs

// require('./configs/userlogged.config')(app)
require('./configs/preformatter.config')(app)
require('./configs/middleware.config')(app)
require('./configs/passport.config')(app)
require('./configs/views.configs')(app)
require('./configs/locals.config')(app)

app.use(userLocals)


// Routes index
require('./routes')(app)


module.exports = app
