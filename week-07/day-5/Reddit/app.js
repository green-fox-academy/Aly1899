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
  reddit.query(allPostsQuery,(err,result)=> {
    if (err){
      console-log(`Error in connection to database: ${err}`)
    }
    res.json(result)
  })
})


app.post('/posts',(req,res)=>{
  let title=req.body.title
  console.log(title)
  let url=req.body.url
  console.log(url)
  let userID=req.query.userid
  console.log(userID)
  let qry=`INSERT INTO posts (title,url,user_id) VALUES('${title}','${url}','${userID}');`
  console.log(qry)
  reddit.query(qry,(err,result)=>{
    if (err){
      console.log('Error in INSERT to DB'+err)
    }
    reddit.query(
      `
      SELECT p.post_id,title,url,create_at,score,u.user_name, vote
      FROM posts p
      LEFT JOIN users u
      ON u.user_id=p.user_id
      LEFT JOIN 
        (SELECT * FROM vote
        WHERE user_id=${userID}) v
      ON v.user_id=p.user_id AND v.post_id=v.post_id
      WHERE p.post_id=${result.insertId};`,(err,responseResult)=>{
        if (err){
          console.log('Error in POST RESPONSE SELECT');
        }
      res.send(responseResult)
      })
  })
  console.log(req.body)
})

app.listen(PORT,()=>{
  console.log(`Listening to port: ${PORT}`);
})