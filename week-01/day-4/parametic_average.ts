'use strict';

var input: number = 8;
var sum: number = 0;
for (let i = 1; i <= input; i++) {
    sum += i;
};
console.log("Sum : " + sum + ", Average : " + (1 + input) / 2);