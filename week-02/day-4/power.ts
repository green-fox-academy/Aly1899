'use strict'


function power(num:number,pow:number):number{
    if (pow<1){
        return 1
    }else{
        return num*power(num,pow-1)
    }
}
console.log(power(2,8))