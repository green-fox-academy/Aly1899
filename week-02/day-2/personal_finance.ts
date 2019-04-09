'use strict';

let cost: number[] = [500, 1000, 1250, 175, 800, 120];
let totalCost = 0
cost.forEach(e => {
    totalCost += e;
})

console.log(totalCost);
console.log(cost.sort(function (a, b) { return a - b })[cost.length - 1])
console.log(cost.sort(function (a, b) { return a - b })[0])
console.log(totalCost / cost.length)