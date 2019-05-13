'use strict'

import { stringify } from 'querystring';

function convertNumber(number:number):string{
  let millionCheck:boolean=false
  let resultString:string=''
  let len=number.toString().length
  let digits:string[]=['',' thousend ',' million ']
  if (number%1000000===0){
    millionCheck=true;
  }
  for (let i=0;i<Math.floor(len/3)+1;i++){
    resultString=convertHundreds(number%1000)+`${millionCheck===true?'':digits[i]}`+resultString
    number=Math.floor(number/1000)
    if (number<1000){
      millionCheck=false
    }

  }
  
  return resultString
}

function convertHundreds(number:number):string{
  let resultString:string='';
  let hunderedCheck:boolean=false; 
  let single:string[]=['','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fiftheen','sixteen', 'seventeen','eighteen','nineteen']
  let tenPluss:string[]=['eleven','twelve','thirteen','fourteen','fiftheen','sixteen', 'seventeen','eighteen','nineteen']
  let tens:string[]=['twenty','thirty','fourty','fifty', 'sixty','seventy','eighty','ninty']  
  if (number%100===0){
    hunderedCheck=true
  }
  if (number % 100<20){
    resultString+=single[number%100]
    number=Math.floor(number/100)
  }else{
  resultString=single[number%10]
  number=Math.floor(number/10)
  resultString=tens[number%10-2]+' '+resultString
  number=Math.floor(number/10)
  }
  if (number>0){
    resultString=single[number%10]+` hundered ${hunderedCheck===true?'':'and'} `+ resultString
}
return resultString
}

console.log(convertNumber(1234567))