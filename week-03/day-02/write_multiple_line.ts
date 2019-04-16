'use strict'

function readFile(sFile:string,word:string,multiplicator:number){
    var fs=require('fs');
    try {
        var fileContent= fs.readFileSync(sFile,'utf8')
        let myContent:string='';
        for (let i=1;i<=multiplicator;i++){
            myContent=myContent+word+'\n'
        }
        fs.writeFileSync(sFile,myContent)
        console.log(fileContent);
    }
    catch {
        return
    }
    
}
readFile('my-file.txt','pear',5);

