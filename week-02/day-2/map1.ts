'use strict';

let myMap:any={};

console.log(Object.keys(myMap).length===0)

myMap[97]='a';
myMap[98]='b';
myMap[99]='c';
myMap[65]='A';
myMap[66]='B';
myMap[67]='C';

console.log(Object.keys(myMap));

// for (let i=0;i<Object.keys(myMap).length;i++){
//     console.log(myMap[i]);
// }

Object.keys(myMap).forEach(e=> {
    console.log(myMap[e])
})

myMap[68]='D'

console.log(Object.keys(myMap).length);

console.log('The va');

