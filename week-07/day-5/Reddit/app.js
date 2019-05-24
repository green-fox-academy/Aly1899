'use strict'

const express=require('express');
const mySql=require('mysql');
const app=express();
const PORT=3000;

app.use(express.json());

const reddit=mySql.createConnection({
  host:'localhost',
  user:'root',
  password:'password',
  database:'reddit'
});

app.get('/posts',(req,res)=>{
  let userID=req.query.userID
  let allPostsQuery=`
  SELECT p.post_id,title,url,create_at,score,u.user_name, vote
  FROM posts p
  LEFT JOIN users u
  ON u.user_id=p.user_id
  LEFT JOIN 
    (SELECT * FROM vote
    WHERE user_id=${userID}) v
  ON v.user_id=p.user_id AND v.post_id=v.post_id;
  `
  console.log(userID)
  reddit.query(allPostsQuery,(err,result)=> {
    if (err){
      console-log(`Error in connection to database: ${err}`)
    }

    console.log(result)
    res.json(result)
  })
})

app.listen(PORT,()=>{
  console.log(`Listening to port: ${PORT}`);
})