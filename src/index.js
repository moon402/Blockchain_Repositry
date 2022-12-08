const express = require('express')
const mongoose= require('mongoose')
const Router = require('./router/route')

  const app = express()


app.use(express.json())
mongoose.connect('mongodb+srv://chanda:QYho3EZNKLny4znA@cluster0.gkrjc46.mongodb.net/blockChain', {useNewUrlParser: true})
.then(()=>{
    console.log('mongodb is connected')
})
.catch((e)=>{
    console.log(e, 'mongoose is not connected')
}),

app.use('/', Router)
app.listen(3000, function(){
    console.log ('port is connected')
})