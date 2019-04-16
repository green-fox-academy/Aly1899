'use strict'

function readFile(sFile:string){
    var fs=require('fs');
    var fileContent= fs.readFileSync('read.txt','utf8')

    let lines:string[] = fileContent.split('\n')
    let lineCount:number=lines.length
    console.log(lineCount);
    
}
readFile('read.txt');

