'use strict'


function sumDigit(n:number):number{
    if (n<10){
        return n
    }else{
        return (n%10)+sumDigit(Math.floor(n/10))
    }
}

console.log(sumDigit(1))