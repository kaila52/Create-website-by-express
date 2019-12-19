const express = require('express');
const router = express.Router();

router.get('/girls1',(req,res,next)=>{
    res.download('./public/images/beautiful_girls.jpg')
})
router.get('/girls2',(req,res,next)=>{
    res.download('./public/images/beautiful_woman.jpg')
})
router.get('/girls3',(req,res,next)=>{
    res.download('./public/images/girl_ultra.jpg')
})

module.exports = router;