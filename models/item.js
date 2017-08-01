var mongoose = require('mongoose')
var Schema = mongoose.Schema

const ItemSchema = new mongoose.Schema({
    user: {
      type: String,
      index:true
    },
    url:{
      type: String,
      required: true
    },
    text:{
      type: String
    }
})

var Item = module.exports = mongoose.model('Item', ItemSchema);
