'use strict'

function readFile(sFile:string){
    var fs=require('fs');
    try {
        var fileContent= fs.readFileSync(sFile,'utf8')
        console.log(fileContent);
        let myContent='Alpar Schwarcz'
        fs.writeFileSync(sFile,myContent)
    }
    catch (err) {
        console.log('Unable to write file: ' + err.path)
    }
    
}
readFile('my-file1.txt');

