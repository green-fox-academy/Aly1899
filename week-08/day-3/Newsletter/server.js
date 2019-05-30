const express=require('express');
const app=express();
const PORT=3000

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  // res.sendFile('page.html');
});

app.post('/signup',(req,res)=>{
  console.log(req.body)
  res.send(req.body)
  // res.send(`<h1>Thanks ${req.body.username}, we will send updates to ${req.body.email} </h1>`)  
})

app.listen(PORT,()=>{
  console.log('Listen to 3000...')
})