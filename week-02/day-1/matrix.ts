'use strict'

let numberOfElements: number =4;
let squareMatrix = new Array(numberOfElements);
for (let i = 0; i < numberOfElements; i++) {
    squareMatrix[i] = new Array()
    for (let j = numberOfElements - 1; j >= 0; j--) {
        if (j === numberOfElements - i - 1) {
            squareMatrix[i].unshift(1);
        } else {
            squareMatrix[i].unshift(0);
        }
    }
}
for (let i=0;i<numberOfElements;i++){
    console.log(squareMatrix[i].join(''));
}
