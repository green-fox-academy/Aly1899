'use strict'

const express=require('express');
const mySql=require('mysql');
const app=express();
const PORT=3000;

const reddit=mySql.createConnection({
  host:'localhost',
  user:'root',
  password:'password',
  database:'reddit'
});

app.get('/posts',(req,res)=>{
  res.send('hello')
})

app.listen(PORT,()=>{
  console.log(`Listening to port: ${PORT}`);
})