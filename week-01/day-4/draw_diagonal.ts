"use strict"

let lineCount: number = 9;
let horizontal=""
let space1="";
let space2="";

for (let i=1;i<=lineCount;i++){
    horizontal+="%";
}
console.log(horizontal);

for (let d=1;d<=lineCount-2;d++){
    for (let i=0;i<d-1;i++){
        space1+=" ";
    }
    // console.log(space1.length);
    for (let i=0;i<lineCount-2-d;i++){
        space2+=" ";
    };
    // console.log(space2.length);
    console.log("%" + space1 + "%" + space2 + "%");
    space1=""
    space2=""
}

horizontal=""
for (let i=1;i<=lineCount;i++){
    horizontal+="%";
    // console.log(horizontal.length)
}
console.log(horizontal);