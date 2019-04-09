'use strict';

let list:string[]=['eggs', 'milk', 'fish', 'apples', 'bread', 'chicken']

function doWeHave(item:string){
    return console.log(list.includes(item))
}

doWeHave('milk')
doWeHave('bananas')

