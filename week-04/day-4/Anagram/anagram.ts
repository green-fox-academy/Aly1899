export function anagramCheck(firstString:string, secondString:string):boolean{
  return firstString.split('').sort().join('')===secondString.split('').sort().join('')    
}

console.log(anagramCheck('sda ','asd'))