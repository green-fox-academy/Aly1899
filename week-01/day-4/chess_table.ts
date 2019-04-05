'use strict';

let lineCount:number=9;
let field:string="";

for (let i=1;i<=lineCount;i++){
    if (i%2===0){
        for (let k=1;k<=lineCount;k+=2){
            field+=" %";
        }
        console.log(field);
        field="";
    }else {
        for (let k=1;k<=lineCount;k+=2){
            field+="% ";
        }
        console.log(field);
        field="";
    }
}