'use strict';

let myObject:any = {
    '978-1-60309-452-8': 'A Letter to Jo',
    '978-1-60309-459-7': 'Lupus',
    '978-1-60309-444-3': 'Red Panda and Moon Bear',
    '978-1-60309-461-0': 'The Lab',
}

Object.keys(myObject).forEach(e => {
    console.log(myObject[e] + " (" + e + ")");
});

delete myObject['978-1-60309-444-3']

Object.keys(myObject).forEach(e => {
    if (myObject[e] === 'The Lab') {
        delete myObject[e]
    }
});

myObject['978-1-60309-450-4'] = 'They Called Us Enemy'
myObject['978-1-60309-453-5'] = 'Why Did We Trust Him?'

console.log(myObject.hasOwnProperty('478-0-61159-424-8'));

console.log(myObject['978-1-60309-453-5']);