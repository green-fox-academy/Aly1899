import {Domino} from "./domino";

function initializeDominoes(): Domino[] {
    let dominoes = [];
    dominoes.push(new Domino(5, 2));
    dominoes.push(new Domino(4, 6));
    dominoes.push(new Domino(1, 5));
    dominoes.push(new Domino(6, 7));
    dominoes.push(new Domino(2 ,4));
    dominoes.push(new Domino(7, 1));
    return dominoes;
}

function print(dominoes: Domino[]) {
    dominoes.forEach(function (value) {
        console.log(value);
    });
}
let dominoes = initializeDominoes();
/** You have the list of Dominoes */
/** Order them into one snake where the adjacent dominoes have the same numbers on their adjacent sides */
/** eg: [2, 4], [4, 3], [3, 5] ... */

let result:number[][]=[[]];
result[0]=dominoes[0].values;
dominoes.splice(0,1)
console.log(result);
let k=0
do{
    for (let i=0;i<dominoes.length;i++){
        if (dominoes[i].values[0]===result[k][1]){
            result.push(dominoes[i].values)
            dominoes.splice(i,1)
            // console.log(dominoes.length);
        }
    }
    k++
}
while (dominoes.length>0)
console.log(result);
