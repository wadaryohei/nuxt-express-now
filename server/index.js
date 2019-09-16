const express = require('express')
const app = express()

// Import Modules
const { hello } = require('./api/hello')

// apiRouting
app.get('/hello', hello)

export default [
  {
    path: '/api',
    handler: app
  }
]
