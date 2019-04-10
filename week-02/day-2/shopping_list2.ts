'use strict';

let product: any = {
    'Milk': 1.07,
    'Rice': 1.59,
    'Eggs': 3.14,
    'Cheese': 12.60,
    'Chicken Breasts': 9.40,
    'Apples': 2.31,
    'Tomato': 2.58,
    'Potato': 1.75,
    'Onion': 1.10
}
let bobList: any = {
    'Milk': 3,
    'Rice': 2,
    'Eggs': 2,
    'Cheese': 1,
    'Chicken Breasts': 4,
    'Apples': 1,
    'Tomato': 2,
    'Potato': 1
}

let aliceList: any = {
    'Rice': 1,
    'Eggs': 5,
    'Chicken Breasts': 2,
    'Apples': 1,
    'Tomato': 10
};

function totalSpent(name:any) {
    let total: number = 0
    Object.keys(name).forEach(e => {
        total += name[e] * product[e]
    })
    return console.log(total);
}

function compare(prod:string){
    if (bobList[prod]>aliceList[prod]){
        console.log( 'Bob')
    }else if (bobList[prod]=aliceList[prod]){
        console.log('Equal');
    }else{
        console.log('Alice');
    }   
}

function compareProd(){
    if (Object.keys(bobList).length>Object.keys(aliceList).length){
        console.log( 'Bob')
    }else if (Object.keys(bobList).length=Object.keys(aliceList).length){
        console.log('Equal');
    }else{
        console.log('Alice');
    }   
}
function totoalPiece(){
    let bobValues:number[]=Object.values(bobList)
    let aliceValues:number[]=Object.values(aliceList)
    if (bobValues.reduce((a,b)=>a+b)>aliceValues.reduce((a,b)=>a+b)){
        console.log( 'Bob')
    }else if (bobValues.reduce((a,b)=>a+b)===aliceValues.reduce((a,b)=>a+b)){
        console.log('Equal');
    }else{
        console.log('Alice');
    }

}

totalSpent(bobList)
totalSpent(aliceList)
compare('Rice')
compare('Potato')
compareProd()
totoalPiece()
