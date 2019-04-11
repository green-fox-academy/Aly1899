'use strict'

function add_star(str:string):string{
    let strClone:string=str
     if (strClone.length===0){
        return '';
    } 
    return strClone[0]+'*'+add_star(strClone.slice(1,strClone.length))
}
console.log(add_star('abctgesr'))