const express = require('express')
const parts = express.Router()
const Part = require('../models/parts.js')

//Routes

//New (must be above show)
parts.get('/parts/new', (req, res) => {
  res.render('new.ejs')
})

//Index
parts.get('/parts', (req, res) => {
  Part.find({}, (err, allParts) => {
    res.render('index.ejs', {
      allParts: parts
    })
  })
})

//Seed (if needed)


//Create
parts.post('/parts', (req, res) => {
  Part.create(req.body, (err, createdPart) => {
    res.redirect('/parts')
  })
})

//Edit
parts.get('/parts/:id/edit', (req, res) => {
  Part.findById(req.params.id, (err, foundPart) => {
    res.render('edit.ejs', {part: foundPart})
  })
})

//Update
parts.put('/parts/:id', (req, res) => {
  Part.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedPart) => {
    res.redirect('/parts')
  })
})

//Delete
parts.delete('/parts/:id', (req, res) => {
  Part.findByIdAndRemove(req.params.id, (err, deletedPart) => {
    res.redirect('/parts')
  })
})

//Show
parts.get('/parts/:id', (req, res) => {
  Part.findById(req.params.id, (err, foundPart) => {
    res.render('show.ejs', {part: foundPart})
  })
})

module.exports = parts
