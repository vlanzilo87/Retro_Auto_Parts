const express = require('express')
const parts = express.Router()
const Part = require('../models/parts.js')

const myParts = [
  {
    name: 'front bumper',
    description: 'front body protection',
    img: 'https://static.summitracing.com/global/images/prod/xlarge/bdy-bm1100119_xl.jpg?rep=False',
    price: 150,
    qty: 5
  },
  {
    name: 'brake calipers',
    description: 'front and rear brake pads for both sides',
    img: 'https://assets2.fcpeuro.com/public/assets/products/329601/large/open-uri20190731-19928-19qnxji.?1564602414',
    price: 75,
    qty: 6
  },
  {
    name: 'fuel pump',
    description: 'delivers fuel from tank to engine',
    img: 'https://www.partsgeek.com/assets/dimage/fulln/07416274-1801383.jpg',
    price: 50,
    qty: 15
  },
  {
    name: 'steering wheel',
    description: 'used - allows driver to turn vehicle',
    img: 'https://i.ebayimg.com/images/g/6iYAAOSw5rBbNGz1/s-l300.jpg',
    price: 100,
    qty: 2
  },
  {
    name: 'wheel set',
    description: 'all 4 rims - no tires',
    img: 'https://www.hubcaphaven.com/mm5/graphics/00000001/aly59168.jpg',
    price: 1000,
    qty: 3
  },
  {
    name: 'headlight',
    description: 'used - includes housing/wiring/bulb',
    img: 'https://assets3.fcpeuro.com/public/assets/products/122253/large/open-uri20140226-13157-qz2owh.?1496428846',
    price: 175,
    qty: 2
  },
  {
    name: 'maf sensor',
    description: 'helps measure air intake',
    img: 'https://assets2.fcpeuro.com/public/assets/products/113340/large/13627547981.jpg?1496426372',
    price: 40,
    qty: 20
  },
  {
    name: 'timing belt kit',
    description: 'replaces worn belt - includes pulley and tensioner',
    img: 'https://assets2.fcpeuro.com/public/assets/products/271580/large/open-uri20170601-15288-ryvtm7.?1496507720',
    price: 250,
    qty: 10
  },
  {
    name: 'driveshaft',
    description: 'connects transmission and rear wheels',
    img: 'https://assets4.fcpeuro.com/public/assets/products/275245/large/open-uri20170829-15408-1eedvrd.?1504039332',
    price: 350,
    qty: 5
  },
  {
    name: 'valve cover',
    description: 'used - protects top of engine',
    img: 'https://assets2.fcpeuro.com/public/assets/products/154551/large/11127526445-1.jpg?1496435612',
    price: 75,
    qty: 1
  },
  {
    name: 'radiator',
    description: 'helps regulate engine temperature',
    img: 'https://www.autohausaz.com/images/17111468079.jpg',
    price: 125,
    qty: 10
  },
  {
    name: 'hood',
    description: 'used - protects engine compartment',
    img: 'https://i.ebayimg.com/images/g/TWkAAOSwzXxaSzJr/s-l640.jpg',
    price: 140,
    qty: 1
  },
  {
    name: 'front seat',
    description: 'used - power seat',
    img: 'https://i.ebayimg.com/images/g/PSsAAOSwkfRbsW3z/s-l640.jpg',
    price: 90,
    qty: 1
  },
  {
    name: 'control arm kit',
    description: 'suspension components for each wheel',
    img: 'https://assets4.fcpeuro.com/public/assets/products/94007/large/E309Piece-L.jpg?1496409070',
    price: 115,
    qty: 4
  }
]

//Routes

//Seed (if needed)
parts.get('/parts/seed', (req, res) => {
  Part.create(myParts, (err, createdParts) => {
    res.redirect('/parts')
  })
})

//New (must be above show)
parts.get('/parts/new', (req, res) => {
  res.render('new.ejs')
})

//Index
parts.get('/parts', (req, res) => {
  Part.find({}, (err, allParts) => {
    res.render('index.ejs', {
      allParts: allParts
    })
  })
})

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

//Requested parts
parts.get('/parts/request', (req, res) => {
  res.render('request.ejs')
})

//Show
parts.get('/parts/:id', (req, res) => {
  Part.findById(req.params.id, (err, foundPart) => {
    res.render('show.ejs', {part: foundPart})
  })
})

module.exports = parts
