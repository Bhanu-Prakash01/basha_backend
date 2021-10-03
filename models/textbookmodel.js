const mongoose = require('mongoose')

const textbookschema= new mongoose.Schema({
    bookname:{
        type:String
    },
    pages:{
        type:Number
    }
})

module.exports = mongoose.model("Textbooks",textbookschema)