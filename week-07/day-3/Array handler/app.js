const express=require('express');
const bodyParser=require('body-parser')
const app=express();
const PORT=3000;


app.use(bodyParser.json()); 
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.post('/',function(req, res){
  console.log(req.body.numbers)
  if (!req.body.what || !req.body.numbers){
    res.send('Please provide action and numbers')
  }
  if (req.body.what==='sum'){
    console.log(req.body.numbers)
    let result=sum(req.body.numbers)
    let resObj={'result': result}
    res.send(resObj)
  }
  if (req.body.what==='multiply'){
    let result=multiply(req.body.numbers)
    let resObj={'result': result}
    res.send(resObj)
  }
  if (req.body.what==='double'){
    let result=double(req.body.numbers)
    let resObj={'result': result}
    res.send(resObj)
  }
})
function sum(arr){
  let result=0
  arr.forEach(element => {
    result+=element
  })
  return result;
}

function multiply(arr){
  let result=1
  arr.forEach(element => {
    result*=element
  })
  return result;
}

function double(arr){
  let resultArr=[]
  arr.forEach(element => {
    resultArr.push(element*2)
  })
  return resultArr;
}
app.listen(PORT, function(){
  console.log('Listening...');
  
})