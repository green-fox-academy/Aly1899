'use strict'

export function anagram(str1:string, str2:string):boolean{
  if (str1.split('').sort().join('')===str2.split('').sort().join('')){
    return true
  }
return false  
}