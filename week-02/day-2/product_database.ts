'use strict';

let productDb:any={
    'Eggs':	200,
    'Milk':	200,
    'Fish':	400,
    'Apples':150,
    'Bread': 50,
    'Chicken': 550
}
function howMuchIsTheFish(item:string){
    console.log(productDb[item])
}

function mostExpensive(){
    let prices:number[]=Object.values(productDb);
    let maxPrice:number=prices.sort(function (a,b){return a - b;})[prices.length-1]   
    let mostExpItem:string[]=[]
    Object.keys(productDb).forEach(e=>{
        if (productDb[e]===maxPrice){
            mostExpItem.push(e)
        }
    })
    return console.log(mostExpItem)
}

function avgPrice(){
    let prices:number[]=Object.values(productDb)
    let sum:number=(prices.reduce((a:number,b:number)=>a+b))
    return console.log('The average price is : ' + sum/prices.length)
}

function belowPice(limit:number){
    let itemNrBelowLimit:number=0;
    Object.keys(productDb).forEach(e=>{
        if (productDb[e]<limit){
            itemNrBelowLimit+=1
        }
    })
    return console.log('The number of items below '+ limit + ' is : ' + itemNrBelowLimit);
    
}

function canBuy(price:any){
    return Object.keys(productDb).includes(price) 
    ? console.log('Yes') 
    : console.log('No')    
}


function cheapest(){
    let prices:number[]=Object.values(productDb);
    let lessPrice:number=prices.sort(function (a,b){return a - b;})[0]   
    let cheapestItem:string[]=[]
    Object.keys(productDb).forEach(e=>{
        if (productDb[e]===lessPrice){
            cheapestItem.push(e)
        }
    })
    return console.log(cheapestItem)
}

mostExpensive()
avgPrice()
belowPice(300)
canBuy(125)
cheapest()