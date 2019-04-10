'use strict';

var lineCount: number = 7;
var line: string = "";
var space: string = '';
for (let i = 1; i <= Math.round(lineCount / 2); i++) {
    for (let k = lineCount - i; k >= 0; k--) {
        space += " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
        line += "*";
    }
    console.log(space + line)
    space = "";
    line = "";
}

for (let i = Math.floor(lineCount / 2); i >= 1; i--) {
    for (let k = 0; k <= lineCount - i; k++) {
        space += " ";
    }
    for (let k = 2 * i - 1; k >= 1; k--) {
        line += "*";
    }
    console.log(space + line)
    space = "";
    line = "";
}