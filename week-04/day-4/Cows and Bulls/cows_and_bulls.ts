'use strict'

import { getUnpackedSettings } from 'http2';

export class CAB{
  numberOfGueses:number=0
  goalNumber:number

  constructor(goalNumber:number=Math.floor(Math.random()*9000)+1000){
    this.goalNumber=goalNumber
  }

  guess(guessNumber:number){
    let goalArr:string[]=this.goalNumber.toString().split('')
    let guessArr:string[]=guessNumber.toString().split('')
    let numberOfDigit:number=4
    let result={
      cow:0,
      bull:0
    }

    for (let i:number=0;i<numberOfDigit;i++){
      console.log(`goal: ${this.goalNumber}, guess: ${guessNumber}`);
      console.log(guessArr[i] + ':' + goalArr[i]);
      
      if (guessArr[i]===goalArr[i]){
        goalArr[i]='*'
        result['bull']++
        console.log('bull' + guessArr[i] + '-' + goalArr[i]);
        
      }else if (goalArr.indexOf(guessArr[i])>-1){
        console.log('index: ' + goalArr.indexOf(guessArr[i]));
        goalArr[goalArr.indexOf(guessArr[i])]='*'
        
        result['cow']++
        console.log('cow' + guessArr[i] + '-' + goalArr[i]);
        
      }
      else{

      }
    }
     return result 
  
}
}

const cab:CAB=new CAB()
console.log(cab.goalNumber)
cab.guess(2344)