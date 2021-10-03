const express = require('express')

const router = express.Router()

router.get('/hi',(req,res)=>{
    res.send("this router")
})


module.exports = router;