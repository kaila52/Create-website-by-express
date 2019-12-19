const express = require('express');
const router = express.Router();

router.get('/',(req,res,next)=>{
    res.send(`<h1>day la the h1</h1>`)
})

module.exports = router;