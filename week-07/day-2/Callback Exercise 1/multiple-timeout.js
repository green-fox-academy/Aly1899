    
'use strict';

// Write a program that prints the following fruits:
// apple -> immediately
// pear -> after 1 seconds
// melon -> after 3 seconds
// grapes -> after 5 seconds

const fruits=['apple','pear','melon','grapes']

for (let i=0;i<4;i++){
  const timeOut = setTimeout( ()=>{
    console.log(fruits[i]);
  }, ((i*2)-1)*1000 )
}