'use strict';

var lineCount: number = 4;
var line: string = "";
var astrix: number = 1;
var space: string = '';
for (let i = 1; i <= lineCount; i++) {
    for (let k = lineCount - i; k >= 0; k--) {
        space += " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
        line += "*";
    }
    console.log(space + line);
    space = "";
    line = "";
}