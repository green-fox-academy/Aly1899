'use strict';

var list1: string[] = [];
console.log(list1);
list1.push('William');
console.log(list1 === []);
list1.push('John');
list1.push('Amanda');
console.log(list1.length);
console.log(list1[2]);

list1.forEach(e => {
    console.log(e);
})

for (let i = 0; i < list1.length; i++) {
    console.log((i + 1) + '. ' + list1[i]);
}

list1.splice(1, 1)

for (let i = list1.length - 1; i >= 0; i--) {
    console.log(list1[i]);
};

list1 = []
console.log(list1);
