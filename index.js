const express = require('express')
const app = express()
const port = 4000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://JihoonDB:6581139a@firstjs.irfsc.mongodb.net/FirstJS?retryWrites=true&w=majority',{
    useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex: true, useFindAndModify:false
}).then(()=>console.log('MongoDB Connected...'))    
  .catch(err => console.log(err))

app.get('/', (req,res)=>res.send('Hello world'))
app.listen(port, ()=>console.log(`Example app listening on port ${port}!`))

