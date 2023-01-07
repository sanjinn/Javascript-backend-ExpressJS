require('dotenv').config()

const port = process.env.API_PORT || 5000
const MongoDB = require('./mongodb_server')
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()

// middleware           (system -> middleware -> app)
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json())

// routes/controllers
const productsController = require('./controllers/productsController')
app.use('/api/products', productsController) 

const usersController = require('./controllers/usersController')
app.use('/api/users', usersController) 



// start web api
app.listen(port, () => console.log(`Web Api is running on http://localhost:${port}`))
MongoDB()
