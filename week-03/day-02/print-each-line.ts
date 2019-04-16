'use strict'

function readFile(sFile:string){
    var fs=require('fs');
    try {
        var fileContent= fs.readFileSync(sFile,'utf8')
        console.log(fileContent);
    }
    catch {
        console.log('Unable to read file: ' + sFile)
    }
    
}
readFile('my-file.txt');

