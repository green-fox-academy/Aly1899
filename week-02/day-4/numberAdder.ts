'use strict'

function numberAdd(n:number):number{
    if (n<2){
        return 1
    }else{
        return n+numberAdd(n-1)
    }
}
console.log(numberAdd(7))