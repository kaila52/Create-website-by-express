const express = require('express');
const router = express.Router();
var isLogin = false;

router.use(express.urlencoded())

router.post('/',(req,res,next)=>{
    if(req.body.username == 'admin' && req.body.password == '123'){
        isLogin = true;
        next()
    }else{
        next({})
    }
},(error,req,res,next)=>{
    res.send(error)
})


module.exports = router;