const express = require('express');
const router = express.Router();

router.use(express.urlencoded())

router.post('/',(req,res,next)=>{
    const arr = [{
        username : req.body.username,
        password : req.body.password
    }]
    if(req.body.username == 'admin' && req.body.password == 'admin123'){
        res.send('Logged in successfully')
    }else{
        res.redirect('/login')
    }
})

module.exports = router;