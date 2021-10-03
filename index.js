const express = require('express')
const server = express()
const mongoose = require('mongoose')
const Textbook_route= require('./routes/textbook')


server.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017')
 .then(()=>{
     console.log('database is connected')
 })


server.use('/textbook',Textbook_route)





server.listen(8000,()=>{
    console.log('is running')
})