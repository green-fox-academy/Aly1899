const express=require('express');
const bodyParser=require('body-parser')
const mysql=require('mysql')
const fs=require('fs');

const path=require('path')
const app=express();
const PORT=3000;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

const bookstore=mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'password',
  database:'bookstore'
})

bookstore.connect((err) => {
  if(err){
    console.log('error in connecting to database'+err.toString())
  }
  console.log('MySql Connected...');
});

app.use(express.static(path.join(__dirname,'public')))

app.get('/',(req,res)=>{
    res.sendFile('public/index.html')
})

app.get('/allbooks',(req,res)=>{
  bookstore.query('SELECT book_name FROM book_mast;',(err,results)=>{
    if(err){
      console.log('error in querying to database'+err.toString())
    }
    res.send(results)
  })
})


app.get('/allbooksfull',(req,res)=>{
  let conditions={}
  let category=req.query.category
  let publisher=req.query.publisher
  let plt=req.query.plt
  let pgt=req.query.pgt
  
  if (req.query.category){
    conditions.category=req.query.category
  }
  if (req.query.publisher){
    conditions.publisher=req.query.publisher
  }
  if (req.query.plt){
    conditions.plt=req.query.plt
  }
  if (req.query.pgt){
    conditions.pgt=req.query.pgt
  }

  let qry=
  `SELECT book_name,aut_name,cate_descrip,pub_name,book_price 
  FROM book_mast b
  LEFT JOIN author a
  ON b.aut_id=a.aut_id
  LEFT JOIN category c
  ON b.cate_id=c.cate_id
  LEFT JOIN publisher p
  ON b.pub_id=p.pub_id`

  if (category){
    qry+=` WHERE c.cate_descrip='${category}'`
  }
  qry+=';'

  bookstore.query(qry,(err,results)=>{
    if(err){
      console.log('error in querying to database'+err.toString())
    }
    res.send(results)
  })
})

app.post('/update',(req,res)=>{
  // deleteTableData()
  let source=loadCSV(req.body.sFile).toString
  console.log('aaa')
  console.log(loadCSV(req.body.sFile))
  bookstore.query(loadCSV(req.body.sFile),(err,results)=>{
    if(err){
      console.log('error in inserting to database'+err.toString())
    }
    res.redirect('/')
  })
})



app.listen(PORT,()=>{
  console.log('Listening...');
})

function deleteTableData(){
  bookstore.query('DELETE FROM users WHERE id IS NOT NULL',(err,results)=>{
    if(err){
      console.log('error in querying to database'+err.toString())
    }
  })  
}

function loadCSV(sFile){
  let rows=fs.readFileSync(sFile,'UTF8').split('\r\n');
  rows.shift()
  let query=`
  USE bookstore;
  INSERT INTO users (id,prefix,first_name,last_name,adderss,height,bitcoin_address,color_preference) 
  VALUES
  `
  rows.forEach(row=>{
    let queryLine='('
    row.split(',').forEach(item=>{
      queryLine+=`'${item}',`
    })
    queryLine=queryLine.slice(0,-1)
    queryLine+='),'
    query+=queryLine 
  })
  query=query.slice(0,-1);
  query+=';'
  return query
}

// loadCSV('./usert.csv')