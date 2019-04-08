'use strict'

let numList: number[] = [1, 2, 3, 8, 5, 6]
numList.map(e => {
    if (e === 8) {
        numList[numList.indexOf(e)] = 4
    }
});
console.log(numList[3]);

