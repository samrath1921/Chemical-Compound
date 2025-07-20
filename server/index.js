const express = require('express');
require('dotenv').config();
const cors=require('cors');
const route = require('./src/routes/routes');
const port = 3000;

const app = express();
app.use(cors({
    origin: '*'
  }));
app.use(express.json());

app.use('/',route);

app.listen(port,()=>{
    console.log('Server running',port)
})