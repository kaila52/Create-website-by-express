const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

const userRouter = require('./routes/userRouter')
const download = require('./routes/download')
const login = require('./routes/login')
const sum = require('./routes/sum')

app.use('/static',express.static(path.join(__dirname,'./public')))
app.use('/api/v1/nguoidung',userRouter)
app.use('/api/v1/download',download)
app.use('/api/v1/login',login)
app.use('/api/v1/sum',userRouter)



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