'use strict'

function remove_x(str:string):string{
    if (str.indexOf('x')===-1){
        return str;
    }
    return remove_x(str.replace('x',''))
}
console.log(remove_x('abcxabcxabcxXabcX'))
