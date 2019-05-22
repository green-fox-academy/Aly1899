const express=require("express")
const app=express();
const port=3000;

app.use('/',express.static(__dirname + '/assets'))

app.set('view engine','ejs')
let testVar=' What a heck!!!'

app.get('/',function(req,res){
  res.render('home')
  window.addEventListener('load',function(){
    const btn=document.getElementById('dash')
    console.log(btn)
  })
});

app.listen(port,function(){
  console.log(`Listening to port ${port}`);
})

