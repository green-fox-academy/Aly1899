'use strict'

let abc:string[]=['Arthur','Boe','Cloe'];
let temp1=abc[2];
let temp2=abc[0];
abc.splice(0,1,temp1);
abc.splice(2,1,temp2);
console.log(abc);

