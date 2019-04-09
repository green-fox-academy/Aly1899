'use strict';

let phoneBook: any = {
    'William A. Lathan': '405-709-1865',
    'John K. Miller': '402-247-8568',
    'Hortensia E. Foster': '606-481-6467',
    'Amanda D. Newland': '319-243-5613',
    'Brooke P. Askew': '307-687-2982'
}

function lookForName(name: string) {
    return console.log('Phone number of ' + name + ' is ' + phoneBook[name])
}
function lookForNumber(num: string) {
    let result: string = '';
    Object.keys(phoneBook).forEach(e => {
        if (phoneBook[e] === num) {
            result = 'This nr belongs to : ' + e
        } else
            result = 'This nr does not exist'
    })
    return result
}

function doWeKnow(name: string) {
    return console.log(phoneBook.hasOwnProperty(name))
}


lookForName('John K. Miller');

console.log(lookForNumber('307-687-2982'));

doWeKnow('Chris E. Myers');