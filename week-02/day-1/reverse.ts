'use strict'

let numList: number[] = [3, 4, 5, 6, 7];
// console.log(numList.reverse());
let tempList: number[] = [];

numList.forEach(element => tempList.unshift(element))
console.log(tempList);
