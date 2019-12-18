const express = require('express')
const router = express.Router()
const path = require('path')

router.get('/',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../views/index.html'))
})
router.get('/home',(req,res,next)=>{
    res.send('<h2>day la h2</h2>')
})
module.exports = router;
