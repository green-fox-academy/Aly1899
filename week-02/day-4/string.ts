'use strict'

function change_x_to_y(str:string):string{
    if (str.indexOf('x')===-1){
        return str;
    }
    return (str.replace('x','y'))
}
console.log(change_x_to_y('abcxabcxabcxXabcX'))
