'use strict';

//  Create a function that takes two strings as a parameter
//  Returns the starting index where the second one is starting in the first one
//  Returns `-1` if the second string is not in the first one

function substr(str: string, keyword: string): number {
    let isEqual: boolean = false;
    let result:number;
    result=-1;
    for (var i = 0; i <= str.length - 1; i++){
        if (str[i] === keyword[0]) {
            isEqual = true;
            for (let k = 1; k <= keyword.length - 1; k++) {
                if (str[i + k] !== keyword[k]) {
                    isEqual = false;
                    console.log(str[i+k] + " - " + keyword[k])
                    break;
                }
            }
            console.log(isEqual)
            if (isEqual=true){
                result=i+1;
                break;
            }
        }
    }
    return result;
}
console.log(substr("Hi, I am a test sentence", "teti"));