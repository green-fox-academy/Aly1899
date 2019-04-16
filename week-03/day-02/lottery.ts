'use strict'

function commonLotteryNumbers(sFile:string){
    let numbersObj:any={}
    const fs=require('fs');
    let lines=fs.readFileSync(sFile,'UTF8').split('\n');
    let numbersArr:string[]=[]
    for (let i=0;i<lines.length;i++){
        let n=lines[i].lastIndexOf('Ft;')
        // numbersArr.push(...lines[i].substring(n+3,lines[0].length-1).split(';'));
        numbersArr.push(...lines[i].substring(n+3,lines[i].length-1).split(';'));
    }
    for (let i=1;i<=90;i++){
        numbersObj[i.toString()]=0
    }
    for (let i=0;i<numbersArr.length;i++){
        numbersObj[numbersArr[i]]=numbersObj[numbersArr[i]]+1
    }
    let numberOccurance:string[]=Object.values(numbersObj)
    let sortNumbersArray=numberOccurance.sort(function(a:any,b:any):any{
        return b-a
    })
    let mostCommon:string[]=[]
    for (let i=0;i<5;i++){
        Object.keys(numbersObj).forEach(e=>{
            if (numbersObj[e]===sortNumbersArray[i]){
                mostCommon.push(e)
            }
        })
    }
    mostCommon=[...new Set(mostCommon)];
    
    for (let i=0;i<mostCommon.length;i++){
        console.log(mostCommon[i]+ ' ('+ numbersObj[mostCommon[i]]+')' )
    }
}

commonLotteryNumbers('lottery.csv')
