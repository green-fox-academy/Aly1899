'use strict';

const mapWith = (array, callback) => {
  let output = [];
  array.forEach(element => {
    output.push(callback(element))
    
  });
  // The mapWith() function should iterate over the given array and call the callback function on every element.
  // It stores the callback return values in the output.
  // The mapWith() should return with the output array.

  return output;
}

const addOne = (number) => {
  return number + 1;
}

// Exercise 1:

console.log(mapWith([1, 2, 3], addOne));
//expected result: [2, 3, 4]


// Exercise 2:

// Create a callback function which removes every second character from a string

const words = ['map', 'reduce', 'filter'];

const mapWith2 = (array,callback)=>{
  let result=[]
  array.forEach(element=>{
    result.push(callback(element))
  })
return result
}

const removeSecondLetter = (string) =>{
  let newString=''
  for (let i=0;i<string.length;i+=2){
    newString+=string[i]
  }
  return newString
}

console.log(mapWith2(words, removeSecondLetter));
// expected result: ['mp','rdc', 'fle']


function isPrime(number){
  let result=true;
  for (let i=2;i<number/2+1;i++){
    if (number % i===0){
      result=false
    }
  }
  return result;
}

console.log(isPrime(10))