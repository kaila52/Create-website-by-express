const express = require("express");
const path = require('path');
const app = express()
const port = 3000;

const userRoudter = require('./routes/userRouter.js')
const sum = require('./routes/sum.js')
const download = require('./routes/download.js')
const login = require('./routes/login.js')

app.use('/static', express.static(path.join(__dirname, './public')))
app.use('/api/v1/nguoidung',userRoudter);
app.use('/api/v1/sum',sum);
app.use('/api/v1/download',download);
app.use('/api/v1/login',login);

app.get('/',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'./views/index.html'))
})
app.get('/cards',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'./views/cards.html'))
})
app.get('/login',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'./views/login.html'))
})
app.get('/register',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'./views/register.html'))
})


app.listen(port,()=>{
    console.log(`listen on ${port}`);
})
