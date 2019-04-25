'use strict'

export class Sum{
  sum(numbers:number[]){
    if (numbers.length===0){
      return 0
    }else if(numbers.length===1){
      return numbers[0]
    }else{
      return numbers.reduce((a,b)=>a+b)
    }
  }
}

let sum1=new Sum()

console.log(sum1.sum([3,2]))