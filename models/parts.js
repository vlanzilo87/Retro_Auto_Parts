const mongoose = require('mongoose')

const partSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: String,
    img:  String,
    price:  Number,
    qty:  Number,
})

const Part = mongoose.model('Part', partSchema);

module.exports = Part
