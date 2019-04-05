'use strict';

//  Create a function that takes two strings as a parameter
//  Returns the starting index where the second one is starting in the first one
//  Returns `-1` if the second string is not in the first one

function substr(str: string, keyword: string): number {
    let isEqual: boolean = false;
    for (var i = 0; i <= str.length - 1; i++)
        if (str[i] === keyword[0]) {
            isEqual = true;
            for (let k = 1; k <= keyword.length - 1; k++) {
                if (str[i + k] !== keyword[k]) {
                    isEqual = false;
                    break;
                }
            }
            if (isEqual === true) {
                return i + 1;
            }
        }
    if (isEqual === false) {
        return -1
    }
}
console.log(substr("this is what I'm searching in", "not"));