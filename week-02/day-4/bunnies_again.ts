'use strict'


function earCountStrangeBunnies(bunnies:number):number{
    if (bunnies<1){
        return 0;
    }
    if (bunnies%2!==0){
        return 3 + earCountStrangeBunnies(bunnies-1)
    }else{
        return 2 + earCountStrangeBunnies(bunnies-1)
    }
}
console.log(earCountStrangeBunnies(7))