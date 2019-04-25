'use strict'

export function countLetter(str:string){
  let strArray:string[]=str.split('');
  let strObj:any={}
  Array.from(new Set(strArray)).forEach(letter=>{
    strObj[letter]=0
   })
  strArray.forEach(letter=>{
      strObj[letter]=strObj[letter]+1
    })
  return strObj;
}

console.log(countLetter('qwertrettty'))

