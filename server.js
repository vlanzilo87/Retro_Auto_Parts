
//Dependencies
const express = require('express')

const mongoose = require('mongoose')
const methodOverride = require('method-override')

const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/retro_auto_parts'
const db = mongoose.connection

//Configuration
const app = express()
const PORT = process.env.PORT || 3000

//Middleware
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))

const partsController = require('./controllers/parts.js')
app.use(partsController)

//Routes
//Welcome
app.get('/', (req, res) => {
  res.render('welcome.ejs')
})

//About
app.get('/about', (req, res) => {
  res.render('about.ejs')
})

app.listen(PORT)

//Mongoose
mongoose.connect(mongoURI, {useNewUrlParser:true, useUnifiedTopology:true}, () => {
  console.log('the connection with mongod is established')
})
