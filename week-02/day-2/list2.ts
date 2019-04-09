'use strict';

let listA: string[] = ['Apple', 'Avocado', 'Blueberries', 'Durian', 'Lychee']
let listB: string[] = listA.slice()

console.log(listB.indexOf('Durian') != -1);
listB.splice(listB.indexOf('Durian'), 1);
listA.splice(4, 0, 'Kiwifruit');

console.log(listA.length > listB.length ? 'List A > List B' : 'List A < List B');
console.log(listA.indexOf('Avocado'));
console.log(listB.indexOf('Durian'));

listB.push('Passion Fruit', 'Pummelo')

console.log(listA[2]);
