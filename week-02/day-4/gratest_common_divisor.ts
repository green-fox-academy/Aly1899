'use strict'


function greatestCommonDivisor(num1:number,num2:number):number{
    if (num1===0){
        return num2
    }
    if (num2===0){
        return num1
    }
     if (num1>num2){
        return greatestCommonDivisor(num1%num2,num2)
     }else{
        return greatestCommonDivisor(num1,num2%num1)
    }
}
console.log(greatestCommonDivisor(18,5))