'use strict'

let numberOfElements: number = 7;
let squareMatrix = new Array(numberOfElements);
for (let i = 0; i < numberOfElements; i++) {
    squareMatrix[i] = new Array(numberOfElements)
    for (let j = numberOfElements - 1; j >= 0; j--) {
        if (j === numberOfElements - i - 1) {
            squareMatrix[i].unshift(1);
        } else {
            squareMatrix[i].unshift(0);
        }
    }
}

console.log(squareMatrix);
