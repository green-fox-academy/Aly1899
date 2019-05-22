const express=require('express')
const bodyParser=require('body-parser')
const path=require('path')
const app=express()
const PORT=8080

app.use(express.static('assets'))

app.get('/',(req,res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.get('/doubling',(req,res) => {
  let result=req.query.input * 2
  let resObj={
    validQuery:{
      'received':req.query.input,
      'result':result
    },
    invalidQuery:{
      'error':'Please provide an input'
    }
  }
  if (req.query.input){
    res.send('Doubling...' + JSON.stringify(resObj.validQuery))
  }else{
    res.send(JSON.stringify(resObj.invalidQuery))

  }
})

app.get('/greeter',(req,res) => {
  let name=req.query.name
  let title=req.query.title
  
  let resObj={ 
  validQuery:{
      'welcome_message':`Oh, hi there ${name}, my dear ${title}`,
    },
  noNameQuery:{
      'error':'Please provide a name'
    },
  noTitleQuery:{
      'error':'Please provide a title'
  }
  }
  if(!req.query.name && !req.query.title){
    res.send(JSON.stringify(resObj.noNameQuery) + JSON.stringify(resObj.noTitleQuery))
  }
  else if(!req.query.name){
    res.send(JSON.stringify(resObj.noNameQuery))
  }
  else if(!req.query.title){
    res.send(JSON.stringify(resObj.noTitleQuery))
  }
  else{
    res.send(JSON.stringify(resObj.validQuery))
  }
})


app.get('/appenda/:par',(req,res) => {
  let result=req.params.par + 'a'
  let resObj={
      'appended':result
    }
    res.send(JSON.stringify(resObj))
})


app.post('/dountil/:action',(req,res) => {
  let param=req.query.until
  var urlencodedParser = bodyParser.urlencoded({ extended: false })
  console.log(req.params.action)
  
  if (req.params.action='sum'){
    result=sum(param)
    resObj={'result':result}
    res.send(JSON.stringify(resObj))
  }
  else if (req.params.action='factor'){
    console.log(param)
    result=factor(param)
    resObj={'result':result}
    res.send(JSON.stringify(resObj))
  }
  else {
    res.send({'error':'Please provide a number'})
  }
})

function sum(n){
  let result=0
  for (let i=1;i<=n;i++){
    result+=i
  }
  return result
}

function factor(n){
  let result=1
  for (let i=1;i<=n;i++){
    result*=i
  }
  return result
}

app.listen(PORT,function(){
  console.log('Listening...')
  console.log(factor(5));
  
})