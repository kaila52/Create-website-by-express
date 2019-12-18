const express = require('express')
const router = express.Router()

router.use(express.urlencoded())

router.post('/',(req,res,next)=>{
    res.json(req.body)
    
})

module.exports = router;