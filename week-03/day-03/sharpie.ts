'use strict'

export class Sharpie{
    sColor:string;
    sWith:number;
    inkAmount:number=2;

    constructor(sColor:string, sWith:number){
        this.sColor=sColor;
        this.sWith=sWith;
    }

    use(){
        this.inkAmount--
    }
}

// const mySharpie:Sharpie=new Sharpie('green', 30)

// console.log(mySharpie);
// mySharpie.use()
// console.log(mySharpie);
