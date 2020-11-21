const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const users=require('./src/user/routes/Routes');
app.use(bodyParser.json())
var cors = require('cors')
const port = process.env.Port || 3000;
app.listen(port,()=>{console.log('Server listen',port)})
app.use(cors())
app.use('/users',users)

mongoose.connect('mongodb://localhost:27017/testingDB',{ useNewUrlParser: true }, { useUnifiedTopology: true },()=>{console.log('DB COnnected!')})
