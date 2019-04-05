"use strict"

let lineCount: number = 9;
let horizontal: string = ""
let space1: string = "";
let space2: string = "";

for (let i = 1; i <= lineCount; i++) {
    horizontal += "%";
}
console.log(horizontal);

for (let d = 1; d <= lineCount - 2; d++) {
    for (let i = 0; i < d - 1; i++) {
        space1 += " ";
    }
    for (let i = 0; i < lineCount - 2 - d; i++) {
        space2 += " ";
    };
    console.log("%" + space1 + "%" + space2 + "%");
    space1 = "";
    space2 = "";
}
horizontal = "";
for (let i = 1; i <= lineCount; i++) {
    horizontal += "%";
}
console.log(horizontal);