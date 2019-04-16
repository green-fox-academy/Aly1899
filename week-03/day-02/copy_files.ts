'use strict'

function copyFiles(sFile1:string,sFile2:string, isAppend:boolean=false){
    const fs=require('fs');
    const content = fs.readFileSync(sFile1,'UTF8');
    if (isAppend===false){
        fs.writeFileSync(sFile2,content);
    }else {
        fs.appendFileSync(sFile2,'\n'+content);
    }
}
copyFiles('read.txt','new_read.txt',true)