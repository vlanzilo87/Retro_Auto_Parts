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

// const items = [
//   {
//     name: 'hat',
//     description: 'accessory',
//     img: 'https://cdn11.bigcommerce.com/s-a4990/images/stencil/1280x1280/products/1319/4023/Dorfman_Pacific_Tall_Top_Hat__53481.1501715473.jpg?c=2',
//     price: 5,
//     qty: 20
//   },
//   {
//     name: 'coat',
//     description: 'clothing',
//     img: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1572275827-nautica-peacoat-1572275806.jpg',
//     price: 10,
//     qty: 50
//   },
//   {
//     name: 'shoes',
//     description: 'footwear',
//     img: 'https://m.media-amazon.com/images/I/71kYYu4lngL._SX700_.jpg',
//     price: 50,
//     qty: 30
//   }
// ]
//
// module.exports = items
