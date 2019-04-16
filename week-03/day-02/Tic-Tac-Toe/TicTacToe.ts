'use strict'

function tictacResult(sFile:string){
    const fs=require('fs');
    const contentLine=fs.readFileSync(sFile,'UTF8').split('\n')
    let resultArray:string[][]=[[]]
    let countX:number=0
    let countO:number=0
    for (let i=0;i<contentLine.length;i++){
        resultArray[i]=contentLine[i].split('')
    }
    console.log(resultArray);
    
    for (let i=0;i<3;i++){
        for (let j=0;j<3;j++){
            if (resultArray[i][j]==='X'){countX++}
            else {countO++}  
        }
        if (countO==3) return console.log('O');
        if (countX==3) return console.log('X');
        countO=0;
        countX=0;
    }

    for (let i=0;i<3;i++){
        for (let j=0;j<3;j++){
            if (resultArray[j][i]==='X'){countX++}
            else {countO++}  
        }
        if (countO==3) return console.log('O');
        if (countX==3) return console.log('X');
        countO=0;
        countX=0;
    }

    for (let i=0;i<3;i++){
            if (resultArray[i][i]==='X'){countX++}
            else {countO++}  
        if (countO==3) return console.log('O');
        if (countX==3) return console.log('X');
        }
        countO=0;
        countX=0;

    
    for (let i=0;i<3;i++){
        if (resultArray[i][2-i]==='X'){countX++}
        else {countO++}  
    if (countO==3) return console.log('O');
    if (countX==3) return console.log('X');
    }

return console.log('draw');
}

tictacResult('win-x.txt')