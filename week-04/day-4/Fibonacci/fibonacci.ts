'use strict';

export function fibonacci(inputNumber:number): number[]{
  let fiboArray:number[]=[0,1];
  if (inputNumber<1){
    return []
  }
  for (let i:number=2;i<inputNumber;i++){
    fiboArray[i]=fiboArray[i-1] + fiboArray[i-2];
  }
  return fiboArray;
}

console.log(fibonacci(5));
