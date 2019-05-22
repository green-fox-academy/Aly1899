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

app.post('/',(req,res)=>{
  let text=req.body.text.split('.')
  let words
  let sentence=[]
  console.log(text.length)
  for (let i=0;i<text.length-1;i++){
    words=text[i].split(' ')
    sentence.push(words)}
    let wordsNumber=0
    for (let i=0;i<sentence.length;i++){
      if (sentence[i].length % 2===0){
        wordsNumber=sentence[i].length
      }else{
        wordsNumber=sentence[i].length-1
      }
      for (let j=0;j<wordsNumber;j+=2){
        console.log(sentence[i][j][0] , sentence[i][j][0].toUpperCase());
        console.log(sentence[i][j].toLowerCase())
        if (sentence[i][j][0]===sentence[i][j][0].toUpperCase()){
          sentence[i][j]=sentence[i][j].toLowerCase()
          sentence[i][j+1]=sentence[i][j+1][0].toUpperCase()+sentence[i][j+1].slice(1)
        }
        [sentence[i][j],sentence[i][j+1]]=[sentence[i][j+1],sentence[i][j]]
      }
      sentence[i]=sentence[i].join(' ')
    }
    sentence=sentence.join('.')
  resObj={'sith_text':sentence}
    res.send(resObj)
})

app.listen(PORT,()=>{
  console.log('Listening...');
  
})