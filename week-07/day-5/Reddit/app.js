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
  let userID=req.body.userid
  let allPostsQuery=`
  SELECT p.post_id,title,url,create_at,s.score,u.user_name,vote
  FROM posts p
  LEFT JOIN users u
  ON u.user_id=p.user_id
  LEFT JOIN 
    (SELECT * FROM vote v
    WHERE user_id=${userID} ) v
  ON v.user_id=p.user_id AND v.post_id=p.post_id
  LEFT JOIN 
    (SELECT post_id,sum(vote) AS score FROM vote
    GROUP BY post_id) s
  ON s.post_id=p.post_id
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
  let url=req.body.url
  let userID=req.body.userid
  let qry=`INSERT INTO posts (title,url,user_id) VALUES('${title}','${url}','${userID}');`
  reddit.query(qry,(err,result)=>{
    if (err){
      console.log('Error in INSERT to DB'+err)
    }
    reddit.query(
      `
      SELECT p.post_id,title,url,create_at,IFNULL(s.score,0) AS score,u.user_name, vote
      FROM posts p
      LEFT JOIN users u
      ON u.user_id=p.user_id
      LEFT JOIN 
        (SELECT * FROM vote
        WHERE user_id=${userID}) v
      ON v.user_id=p.user_id AND v.post_id=p.post_id
      LEFT JOIN 
        (SELECT post_id,sum(vote) AS score FROM vote
        GROUP BY post_id) s
      ON s.post_id=p.post_id
      WHERE p.post_id=${result.insertId};`,(err,responseResult)=>{
        if (err){
          console.log('Error in POST RESPONSE SELECT');
        }
      res.send(responseResult)
      })
  })
})

//UPVOTE

app.put('/posts/:postid/upvote',(req,res)=>{
  let postID=req.params.postid
  let userID=req.body.userid
  let upVoteCheck
  reddit.query(`
    SELECT COUNT(*) AS count FROM vote
    WHERE user_id=${userID} AND post_id=${postID} AND vote=1;`,(err,voteCheckResult)=>{
      if (err) {
        console.log('Error in UPVOTE CHECK' + err)
      }
      console.log('voteCheckResult : ' + voteCheckResult[0].count)
      if (voteCheckResult[0].count===1){
        reddit.query(`DELETE FROM vote WHERE user_id=${userID} AND post_id=${postID} AND vote=1;`)  
        res.send(`You've alredy voted tothis post`)
      }else{
        reddit.query(
          `INSERT INTO vote(user_id,post_id,vote) 
          VALUES
          ('${userID}','${postID}','1')`,(err,result)=>{
            if (err){
              console.log('Error in PUT UPVOTE INSERT')
            }
            reddit.query(
              `
              SELECT p.post_id,title,url,create_at,IFNULL(s.score,0) AS score,u.user_name, vote
              FROM posts p
              LEFT JOIN users u
              ON u.user_id=p.user_id
              LEFT JOIN 
                (SELECT * FROM vote
                WHERE user_id=${userID}) v
              ON v.user_id=p.user_id AND v.post_id=p.post_id
              LEFT JOIN 
                (SELECT post_id,sum(vote) AS score FROM vote
                GROUP BY post_id) s
              ON s.post_id=p.post_id
              WHERE p.post_id=${postID};`,(err,responseResult)=>{
                if (err){
                console.log('Error in POST RESPONSE SELECT');
              }
            res.send(responseResult)
            })
          })
        }
    })
  })

  //DOWNVOTE

  app.put('/posts/:postid/downvote',(req,res)=>{
    let postID=req.params.postid
    let userID=req.body.userid
    reddit.query(`
    SELECT COUNT(*) AS count FROM vote
    WHERE user_id=${userID} AND post_id=${postID} AND vote=-1;`,(err,voteCheckResult)=>{
      if (err) {
        console.log('Error in DOWNVOTE CHECK' + err)
      }
  // })
      console.log('voteCheckResult : ' + voteCheckResult[0].count)

      if (voteCheckResult[0].count===1){
        reddit.query(`DELETE FROM vote WHERE user_id=${userID} AND post_id=${postID} AND vote=-1;`)  
        res.send(`You've alredy voted tothis post`)
      }else{   
  
    reddit.query(
      `INSERT INTO vote(user_id,post_id,vote) 
      VALUES
      ('${userID}','${postID}','-1')`,(err,result)=>{
        if (err){
          console.log('Error in PUT DOWNVOTE INSERT')
        }
        reddit.query(
        `
        SELECT p.post_id,title,url,create_at,IFNULL(s.score,0) AS score,u.user_name, vote
        FROM posts p
        LEFT JOIN users u
        ON u.user_id=p.user_id
        LEFT JOIN 
          (SELECT * FROM vote
          WHERE user_id=${userID}) v
        ON v.user_id=p.user_id AND v.post_id=p.post_id
        LEFT JOIN 
          (SELECT post_id,sum(vote) AS score FROM vote
          GROUP BY post_id) s
        ON s.post_id=p.post_id
        WHERE p.post_id=${postID};`,(err,responseResult)=>{
            if (err){
            console.log('Error in POST RESPONSE SELECT');
          }
        res.send(responseResult)
        })
      })
      }
    })
  })


    app.delete('/posts/:postid',(req,res)=>{
      let postID=req.params.postid
      let userID=req.headers.userid
      let tempRes
      console.log(userID)
      // req.header('')
      reddit.query(
      `
      SELECT p.post_id,title,url,create_at,IFNULL(s.score,0) AS score,u.user_name, vote
      FROM posts p
      LEFT JOIN users u
      ON u.user_id=p.user_id
      LEFT JOIN 
        (SELECT * FROM vote
        WHERE user_id=${userID}) v
      ON v.user_id=p.user_id AND v.post_id=p.post_id
      LEFT JOIN 
        (SELECT post_id,sum(vote) AS score FROM vote
        GROUP BY post_id) s
      ON s.post_id=p.post_id
      WHERE p.post_id=${postID};`,(err,responseResult)=>{
        if (err){
          console.log('Error in DELETE SELECT')
        }
        // res.type('json')
        tempRes=responseResult
      })
      reddit.query(
        `DELETE FROM posts
        WHERE post_id=${postID};`,(err,result)=>{
          if (err){
            console.log('Error in DELETE INSERT post')
          }
        res.json(tempRes) 
        })
    })

app.put('/posts/:postid',(req,res)=>{
  let title=req.body.title
  let url=req.body.url
  let postID=req.params.postid
  let userID=req.body.userid
  let qry=
  `UPDATE posts 
  SET
  title='${title}',
  url='${url}'
  where post_id=${postID};
  `
  reddit.query(qry,(err,result)=>{
    if (err){
      console.log('Error in PUT UPDATE to DB'+err)
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
      ON v.user_id=p.user_id AND v.post_id=p.post_id
      WHERE p.post_id=${postID};`,(err,responseResult)=>{
        if (err){
          console.log('Error in POST RESPONSE SELECT');
        }
      res.send(responseResult)
      })
  })
})
    

app.listen(PORT,()=>{
  console.log(`Listening to port: ${PORT}`);
})