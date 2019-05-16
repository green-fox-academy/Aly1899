let express = require('express');

let app = express();

app.get('/',function(req,res){
  res.sendFile(__dirname + '/assets/result.png')
})

app.listen(3000)