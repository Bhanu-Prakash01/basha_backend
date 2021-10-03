const express= require('express')
const router= express.Router()

const mongoose= require('mongoose')

const Textbooks= require('../models/textbookmodel')

router.get('/', async (req,res)=>{
    const all_books= await Textbooks.find()
    res.send(all_books)
})


router.post('/post', async (req,res)=>{
    const book_name = req.body.book_name
    const pages = req.body.pages

    const saved_books= new Textbooks({
        bookname:book_name,
        pages: pages
    })

    const savings= await saved_books.save()

    res.send(savings)
})

module.exports = router