const express = require('express');
const router = express.Router();

router.get('/:num1/:num2',(req,res,next)=>{
    const sum = parseInt(req.params.num1) + parseInt(req.params.num2)
    res.send(`Tong 2 so la: ${sum}`)
})

module.exports = router;