'use strict'

let arr:number[]=[1,3,1,2,1,8,2,5,3,6,1,1]
let uniqueArr=[]
let multiArr=[]
arr.forEach(function(e){
    if (uniqueArr.indexOf(e)>-1){
        let eIndex=uniqueArr.indexOf(e);
        uniqueArr.splice(eIndex,1);
        multiArr.push(e)            
    }else if (e in multiArr) {
    }else {
        uniqueArr.push(e);
    }
})
console.log(uniqueArr);    

