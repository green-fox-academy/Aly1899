'use strict'

let lineCount: number = 6;
var horizontal: string = "";
let space: string = "";
for (let i = 1; i <= lineCount; i++) {
    horizontal += "%";
}
console.log(horizontal);

for (let i = 1; i <= lineCount - 2; i++) {
    space += " ";
}
for (let k = 1; k <= lineCount - 2; k++) {
    console.log("%" + space + "%");
}
horizontal = "";
for (let i = 1; i <= lineCount; i++) {
    horizontal += "%";
}
console.log(horizontal);