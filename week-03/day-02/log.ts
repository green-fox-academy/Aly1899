'use strict'

function readLogs(sFile:string){
    var fs=require('fs');
    let content:string[]=fs.readFileSync(sFile,'utf8').split('\n');
    let contentArray:string[][]=[[]]
    for (let i=0;i<content.length;i++){
        contentArray[i]=content[i].split('   ')
    }
    let ipAddress:string[]=[];
    var postCount:number=0;
    for (let i=0;i<content.length;i++){
        ipAddress[i]=contentArray[i][1]
        if (contentArray[i][2].substr(0,4)=='POST'){
            postCount=postCount+1;
        }
    }
    let uniqueIP=[...new Set(ipAddress)]
    console.log(uniqueIP);
    console.log('The GET/POST request ratio is : '+Math.round((content.length-postCount)/postCount) + '%'); 
}
readLogs('log.txt')