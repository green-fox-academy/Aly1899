'use strict'

function bubble(list: number[], isDes?: boolean) {
    let newList: number[] = []
    if (isDes == true) {
        newList = list.sort().reverse()
    } else {
        newList = list.sort()
    }
    return newList
}
console.log(bubble([1, 5, 2, 4, 7]));
